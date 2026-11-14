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
		"content": `<style>.ikqy5eb9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h16m-8 0V7m-1.5 0h3c3 2.5 4.5 5 4.5 8a6 6 0 0 1-12 0c0-3 1.5-5.5 4.5-8");
}
</style><path class="ikqy5eb9o"/>`,
		"fallback": "uix:speed-bag",
	});
}

export default Component;
