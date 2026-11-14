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
		"content": `<style>.g4weej29w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.23 8h8.78a1.75 1.75 0 0 1 1.647 2.343l-3.24 9A1.75 1.75 0 0 1 14.77 20.5H5.99a1.75 1.75 0 0 1-1.647-2.343l3.24-9A1.75 1.75 0 0 1 9.23 8M9 3.5h8.5M16 2l1.5 1.5L16 5");
}
</style><path class="g4weej29w"/>`,
		"fallback": "uix:skew-horizontal",
	});
}

export default Component;
