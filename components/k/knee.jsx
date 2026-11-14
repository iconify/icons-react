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
		"content": `<style>.jg_sv4uxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5v6c-1.5 1-1.25 3 .75 3.25H13c1.75-.25 2-2.25.5-3.25v-6m-5 19V16c-1.5-1-1.25-2 .25-2H13c1.5 0 1.75 1 .25 2v5.5M16 12.75a1.75 2.75 0 1 0 3.5 0a1.75 2.75 0 1 0-3.5 0");
}
</style><path class="jg_sv4uxb"/>`,
		"fallback": "uix:knee",
	});
}

export default Component;
