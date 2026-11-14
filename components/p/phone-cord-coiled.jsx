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
		"content": `<style>.nhg649fnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17c2.5 0 5-4 5-7.5C8 7 6 7 6 9.5C6 13 8.5 17 11 17s5-4 5-7.5c0-2.5-2-2.5-2 0c0 3.5 2.5 7.5 5 7.5m0 0h2.5m-19 0H3");
}
</style><path class="nhg649fnj"/>`,
		"fallback": "uix:phone-cord-coiled",
	});
}

export default Component;
