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
		"content": `<style>.rntbhvbzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19M7.75 8.5h8.5A1.75 1.75 0 0 1 18 10.25v1A1.75 1.75 0 0 1 16.25 13h-8.5A1.75 1.75 0 0 1 6 11.25v-1A1.75 1.75 0 0 1 7.75 8.5M11 13l2-4.5M8 13v5m8-5v5");
}
</style><path class="rntbhvbzd"/>`,
		"fallback": "uix:lane-closure",
	});
}

export default Component;
