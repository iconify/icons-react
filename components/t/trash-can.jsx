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
		"content": `<style>.e3lfoyb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5L7 21h10l1.5-13.5m-14 0a7.5 3.5 0 0 1 15 0ZM10 11v6.5m4-6.5v6.5");
}
</style><path class="e3lfoyb1o"/>`,
		"fallback": "uix:trash-can",
	});
}

export default Component;
