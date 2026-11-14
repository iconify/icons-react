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
		"content": `<style>.y3pug9hpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 18H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 15m1 3v3m7-3v3m7-3v3");
}
</style><path class="y3pug9hpa"/>`,
		"fallback": "uix:pallet",
	});
}

export default Component;
