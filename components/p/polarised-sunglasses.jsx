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
		"content": `<style>.eribl-2gq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9h1.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25h-1.5a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 5.75 9m11 0h1.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25h-1.5a3.25 3.25 0 0 1-3.25-3.25A3.25 3.25 0 0 1 16.75 9m-6.25 2q1.5-1.5 3 0M5 13.5l3-3m8 3l3-3");
}
</style><path class="eribl-2gq"/>`,
		"fallback": "uix:polarised-sunglasses",
	});
}

export default Component;
