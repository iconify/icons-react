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
		"content": `<style>.jar7ucc3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12h11M9 9.5L6.5 12L9 14.5m6-5l2.5 2.5l-2.5 2.5M3 3v18M21 3v18");
}
</style><path class="jar7ucc3l"/>`,
		"fallback": "uix:spacing-horizontal",
	});
}

export default Component;
