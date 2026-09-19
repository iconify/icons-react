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
		"content": `<style>.qrl84lulh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.338 42.5l20.514-37l3.802 37M17.382 31.598h17.15M8.008 42.5h9.374m13.933 0h8.677M27.728 31.598L26.371 42.5m-4.238 0l2.161-15.538");
}

.s_x538i_w {
  cx: 26.449px;
  cy: 26.962px;
  r: 2.156px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="qrl84lulh"/><circle class="s_x538i_w"/>`,
		"fallback": "arcticons:stavanger-aftenblad",
	});
}

export default Component;
