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
		"content": `<style>.d01fn-0qd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 18v-1.5c-1.75-1-2.5-2.5-2.5-4a5 5 0 0 1 10 0c0 1.5-.75 3-2.5 4V18Zm.75 2.75h3.5M7.018 6.563a7.75 7.75 0 0 1 9.964 0M5.977 3.899a10.5 10.5 0 0 1 12.046 0");
}
</style><path class="d01fn-0qd"/>`,
		"fallback": "uix:smart-home-ready",
	});
}

export default Component;
