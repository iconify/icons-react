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
		"content": `<style>.yspc2kqdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 2.5h4.25A4.375 4.375 0 0 1 15.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M7 18.5h4M19.5 4za1 1 0 0 1 1 1v10.711a1.5 1.5 0 0 1-.107.557L20 17.25a.539.539 0 0 1-1 0l-.393-.982a1.5 1.5 0 0 1-.107-.557V5a1 1 0 0 1 1-1");
}
</style><path class="yspc2kqdl"/>`,
		"fallback": "uix:tablet-stylus",
	});
}

export default Component;
