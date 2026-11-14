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
		"content": `<style>.d3dl9qe3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 12h2A1.75 1.75 0 0 1 8 13.75v2a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 4.25 12m5.5 0h2a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 8 15.75v-2A1.75 1.75 0 0 1 9.75 12M7 6.5h2a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 9 12H7a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 7 6.5m9.25 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="d3dl9qe3t"/>`,
		"fallback": "uix:play-therapy",
	});
}

export default Component;
