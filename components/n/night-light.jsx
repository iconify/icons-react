import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dbvavh8mq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.316 27.202l.001 4.96h-8.523l.01-4.884");
}

.gg14rjqsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.848 29.195a13.711 13.711 0 1 1 16.156.044");
}

.hqrb4tdbb {
  width: 11.937px;
  height: 3.432px;
  x: 18.032px;
  y: 40.068px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.249px;
}

.y4y1-xbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.004 29.24v6.622l-16.187-.018l.04-6.661m3.867-1.966a9.738 9.738 0 1 1 8.593-.015");
}
</style><path class="gg14rjqsi"/><path class="y4y1-xbqu"/><path class="dbvavh8mq"/><rect class="hqrb4tdbb"/>`,
		"fallback": "arcticons:night-light",
	});
}

export default Component;
