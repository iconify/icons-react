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
		"content": `<style>.lqous2-oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 6l4.5-2.5c1 1.5 2 2 3.5 2s2.5-.5 3.5-2L20 6l-2 4.5l-2-1V20H8V9.5l-2 1Z");
}
</style><path class="lqous2-oj"/>`,
		"fallback": "uix:pe-kit",
	});
}

export default Component;
