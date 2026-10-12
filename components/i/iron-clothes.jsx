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
		"content": `<style>.w1za0fb8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25h18.5v-3.5a3.5 3.5 0 0 0-3.5-3.5h-8.5c-3.25 0-5.5 3-6.5 7m6.75-7l1-3.25H18a1 1 0 0 1 1 1v2.25M9 3c-.9 1.15.9 2.1 0 3.25M13 3c-.9 1.15.9 2.1 0 3.25M17 3c-.9 1.15.9 2.1 0 3.25");
}
</style><path class="w1za0fb8t"/>`,
		"fallback": "iconoven:iron-clothes",
	});
}

export default Component;
