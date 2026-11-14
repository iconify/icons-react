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
		"content": `<style>.w6hkmlgxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.5c-1-7 3.5-13 8.5-13s9.5 6 8.5 13c-2.5-4.5-5.5-6-8.5-6s-6 1.5-8.5 6m8.5-13v7m4.5 1.25l2-4.5m-11 4.5l-2-4.5");
}
</style><path class="w6hkmlgxb"/>`,
		"fallback": "uix:pin-croissant",
	});
}

export default Component;
