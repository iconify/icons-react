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
		"content": `<style>.c9xy5hvjb {
  width: 5.786px;
  height: 7.232px;
  x: 32.491px;
  y: 20.384px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.893px;
  ry: 2.893px;
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

.uefzt6q_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 21.107h5.786m-2.893 5.786v-5.786m12.54 0h5.785l-5.785 5.786h5.785");
}

.um9yeubjp {
  width: 5.786px;
  height: 7.232px;
  x: 16.718px;
  y: 20.384px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.893px;
  ry: 2.893px;
}
</style><path class="uefzt6q_g"/><rect transform="rotate(90 19.61 24)" class="um9yeubjp"/><rect transform="rotate(90 35.384 24)" class="c9xy5hvjb"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:tozo",
	});
}

export default Component;
