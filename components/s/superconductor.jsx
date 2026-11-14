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
		"content": `<style>.d20vcjb2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5v-5a6.5 6.5 0 0 1 13 0v5h-4v-5a2.5 2.5 0 0 0-5 0v5ZM5.25 17h13.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 5.25 17m.25-6h4m5 0h4");
}
</style><path class="d20vcjb2s"/>`,
		"fallback": "uix:superconductor",
	});
}

export default Component;
