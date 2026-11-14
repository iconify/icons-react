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
		"content": `<style>.o_36gc11s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v5.5l-5 10C4 19.75 4.75 21 6 21h12c1.25 0 2-1.25 1.5-2.5l-5-10V3M8 3h8M6.75 14h10.5");
}
</style><path class="o_36gc11s"/>`,
		"fallback": "uix:pin-lab",
	});
}

export default Component;
