import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yc1wgpbfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5h12m-2.5 0V21M3 14.5h8m-7.5 0v-7m6 7V21m0-3.5h9");
}
</style><path class="yc1wgpbfw"/>`,
		"fallback": "uix:school-desk",
	});
}

export default Component;
