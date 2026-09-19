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
		"content": `<style>.kbcmx-b7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.604 31.639l9.639 6.8l-4.974-11.507");
}

.zf1_xzbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.604 31.639l4.348-4.386L42.5 14.596l-17.727 6.2L5.5 9.561z");
}
</style><path class="kbcmx-b7t"/><path class="zf1_xzbur"/>`,
		"fallback": "arcticons:mymaxfitness",
	});
}

export default Component;
