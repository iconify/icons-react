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
		"content": `<style>.gbdm1o_zo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 10.5H9.07L22 3.035a4 4 0 0 1 4 0l15.156 8.75a4 4 0 0 1 2 3.465v1.5H4.844m30.734 13h7.578v3a4 4 0 0 1-2 3.465L28 43.81V23.5h15.156M20 43.81V23.5H4.844v9.25a4 4 0 0 0 2 3.465l8.104 4.678V29.75H9.896");
}
</style><path class="gbdm1o_zo"/>`,
		"fallback": "arcticons:trion",
	});
}

export default Component;
