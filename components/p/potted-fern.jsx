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
		"content": `<style>.f5wgf1b6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.741 14.5h8.518a1.75 1.75 0 0 1 1.697 2.174l-.875 3.5a1.75 1.75 0 0 1-1.697 1.326H8.616a1.75 1.75 0 0 1-1.697-1.326l-.875-3.5A1.75 1.75 0 0 1 7.741 14.5m4.259 0V7a3 3 0 0 1 6 0a1.5 1.5 0 0 1-3 0m-3 7.5c-1.5-4.5-4.5-7-8.5-7m8.5 7c2-2 5-3 8.5-2.5");
}
</style><path class="f5wgf1b6h"/>`,
		"fallback": "uix:potted-fern",
	});
}

export default Component;
