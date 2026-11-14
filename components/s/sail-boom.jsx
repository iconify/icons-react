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
		"content": `<style>.l3ew6sb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 2.5V17m0-14L4 13.5m-1.5 0H14M5 17h16l-2 3.5H7Z");
}
</style><path class="l3ew6sb7x"/>`,
		"fallback": "uix:sail-boom",
	});
}

export default Component;
