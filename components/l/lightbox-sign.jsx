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
		"content": `<style>.f-igzubtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.125 6.5h7.75A2.625 2.625 0 0 1 18.5 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 5.5 14.875v-5.75A2.625 2.625 0 0 1 8.125 6.5m.375 4h7m-7 3H13m-1-11V4m0 16v1.5M2.5 12h1.25m16.5 0h1.25M2.75 2.75L4 4m17.25-1.25L20 4M2.75 21.25L4 20m17.25 1.25L20 20");
}
</style><path class="f-igzubtd"/>`,
		"fallback": "uix:lightbox-sign",
	});
}

export default Component;
