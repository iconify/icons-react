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
		"content": `<style>.r2q4-vs3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.66 6.619l6.384 3.886a1.75 1.75 0 0 1 0 2.99L9.66 17.381A1.75 1.75 0 0 1 7 15.886V8.114a1.75 1.75 0 0 1 2.66-1.495M2.5 12H7m11.5 0h3M10 12h3m-1.5-1.5v3");
}
</style><path class="r2q4-vs3j"/>`,
		"fallback": "uix:optical-amplifier",
	});
}

export default Component;
