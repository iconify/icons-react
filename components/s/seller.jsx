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
		"content": `<style>.jq97qsw-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-3.917 3.357-6.396 7.723-6.497M14.5 21.75v-7.5m0 .75h7.25m-4 1.75h2.5a1.5 1.5 0 0 1 1.5 1.5v1.25a1.5 1.5 0 0 1-1.5 1.5h-2.5a1.5 1.5 0 0 1-1.5-1.5v-1.25a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="jq97qsw-r"/>`,
		"fallback": "uix:seller",
	});
}

export default Component;
