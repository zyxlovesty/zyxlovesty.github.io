// Set the date we're counting down to
var countDownDate = new Date("May 29, 2023 00:00:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // If the count down is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    return;
  }

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = "离和我老婆见面还有：" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);
