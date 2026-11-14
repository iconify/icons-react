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
		"content": `<style>.gimb-jbmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11h7a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 16H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 11m7.5 0l8-8M5 16v3m3.5-3v3m3.5-3v3");
}
</style><path class="gimb-jbmc"/>`,
		"fallback": "uix:scrub-brush",
	});
}

export default Component;
