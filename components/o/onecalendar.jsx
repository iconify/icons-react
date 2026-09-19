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
		"content": `<style>.g8jpjsbyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 12.645h37m-3.5 1.5v-3m-10 3v-3m-10 3v-3m-10 3v-3m11.375 14.332L24 23.503m0 0v14.501m0 0c5.58-.004 10.099-4.531 10.094-10.11c-.004-5.58-4.531-10.1-10.11-10.095c-5.58.005-10.1 4.531-10.095 10.11a10.1 10.1 0 0 0 6.122 9.278");
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
</style><path class="g8jpjsbyu"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:onecalendar",
	});
}

export default Component;
