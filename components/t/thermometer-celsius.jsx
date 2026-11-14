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
		"content": `<style>.pr_gm_bpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5v-10a2.5 2.5 0 0 1 5 0v10a3.5 3.5 0 1 1-5 0m16.5-6.25a4.5 4.5 0 1 0 0 6.5M11.75 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M6.5 9v9");
}
</style><path class="pr_gm_bpw"/>`,
		"fallback": "uix:thermometer-celsius",
	});
}

export default Component;
