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
		"content": `<style>.a0bdy9y_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.445 22.71q.28 1.25 1.83.31l3.72-2.25l3.89 2.36q1.28.83 1.67-.42m-11.11-4.4q.28 1.25 1.83.31l3.72-2.25l3.89 2.36q1.28.83 1.67-.42");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.yopgwuhtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.555 5.63V27.2q-.39 1.25-1.67.41l-3.89-2.36l-3.72 2.25q-1.55.95-1.83-.3V5.5");
}
</style><path class="a0bdy9y_n"/><path class="yopgwuhtd"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:marks",
	});
}

export default Component;
