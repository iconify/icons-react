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
		"content": `<style>.wjwz0fu6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5v15m0-7.5h15.5A2.5 2.5 0 0 1 21 15v5M3 16.5h18m-14.25-8h2.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 9.25 11h-2.5A1.25 1.25 0 0 1 5.5 9.75A1.25 1.25 0 0 1 6.75 8.5m6.75-2l2 2l4-4.5");
}
</style><path class="wjwz0fu6p"/>`,
		"fallback": "uix:make-the-bed",
	});
}

export default Component;
