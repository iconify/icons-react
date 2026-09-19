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
		"content": `<style>.czd_ajb2c {
  width: 15.6px;
  height: 28.5px;
  x: 25.45px;
  y: 9.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.ev2fftbwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.293 24h17.414m-3.432-3.432l3.433 3.433l-3.433 3.432M32.5 35.7H34m-22.8-3.299h1m-1 1.581h1m-1 1.582h1m-1 1.582h1m-3.5-4.745h1m-1 1.581h1m-1 1.582h1m-1 1.582h1m4-4.745h1m-1 1.581h1m-1 1.582h1m-1 1.582h1M8.45 8.4h6.5v14h-6.5z");
}

.j8rekhhen {
  width: 9.5px;
  height: 37px;
  x: 6.95px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.5px;
  ry: 1.5px;
}

.qgf4coxpr {
  width: 2.5px;
  height: 2.5px;
  x: 10.45px;
  y: 28.386px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.5px;
  ry: 0.5px;
}

.vhxx9zp8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.95 25.5h9.5");
}
</style><rect class="j8rekhhen"/><rect class="czd_ajb2c"/><path class="ev2fftbwn"/><rect class="qgf4coxpr"/><path class="vhxx9zp8l"/>`,
		"fallback": "arcticons:transfersupport",
	});
}

export default Component;
