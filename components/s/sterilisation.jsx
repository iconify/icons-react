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
		"content": `<style>.qtt3fbczd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 9.25c0-.75 2-.75 2 0m-2 0L8.5 18c-.25.75.5 2 2 3.25m2.5-12L15.5 18c.25.75-.5 2-2 3.25M6.5 9c-1-1 1-2.5 0-3.5c-.75-.75-.25-2.25.5-3m5 3.75c-1-1 1-2.25 0-3.5M17.5 9c-1-1 1-2.5 0-3.5c-.75-.75-.25-2.25.5-3M9.5 14l1 .25m4-.25l-1 .25");
}
</style><path class="qtt3fbczd"/>`,
		"fallback": "uix:sterilisation",
	});
}

export default Component;
