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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wn_8el2ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.93 34.768c9.433-5.334 16.665-5.31 26.14 0L25.212 10.981c-.624-1.252-1.85-1.234-2.426-.075z");
}
</style><circle class="cpk0fnbgt"/><path class="wn_8el2ov"/>`,
		"fallback": "arcticons:upnote",
	});
}

export default Component;
