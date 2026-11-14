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
		"content": `<style>.sxgqoccle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19V3h-5v4.5H12V12H7.5v4.5h-5Zm.5-9l8-8m-8 8v4.5");
}
</style><path class="sxgqoccle"/>`,
		"fallback": "uix:pin-stairs",
	});
}

export default Component;
