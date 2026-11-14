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
		"content": `<style>.d5un-6bwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v.75a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 8.125v-.75A4.375 4.375 0 0 1 7.375 3M5.5 21.5L12 15l6.5 6.5m-6.5-9v9M6 7.75h.01");
}
</style><path class="d5un-6bwr"/>`,
		"fallback": "uix:phone-tripod",
	});
}

export default Component;
