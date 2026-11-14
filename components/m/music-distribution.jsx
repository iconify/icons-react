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
		"content": `<style>.hk00v1bwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0V3c1.5 3 6 3 6 7m-1.25 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0M16 17.5l3.5-2m-3.5 3l3.5 2");
}
</style><path class="hk00v1bwi"/>`,
		"fallback": "uix:music-distribution",
	});
}

export default Component;
