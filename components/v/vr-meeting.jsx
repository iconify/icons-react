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
		"content": `<style>.u238bi4ii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 18a6.25 3 0 1 0 12.5 0a6.25 3 0 1 0-12.5 0m4.5-13.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9.75 11c0-1.25 1-2.25 2.25-2.25s2.25 1 2.25 2.25M3 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 6.75C2.5 12 3.5 11 4.75 11S7 12 7 13.25M17.5 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 6.75C17 12 18 11 19.25 11s2.25 1 2.25 2.25");
}
</style><path class="u238bi4ii"/>`,
		"fallback": "uix:vr-meeting",
	});
}

export default Component;
