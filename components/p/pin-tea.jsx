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
		"content": `<style>.nflqzt-hx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 1h1.5a2.25 2.25 0 0 1 0 4.5H16m-3.5-8.25c-1-1.5 1-3 0-4.5M8 11.5L6 7m0-3za1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 6 7a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 6 4");
}
</style><path class="nflqzt-hx"/>`,
		"fallback": "uix:pin-tea",
	});
}

export default Component;
