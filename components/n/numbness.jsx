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
		"content": `<style>.d-0_c63rg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 6v2.25m3-4.25v2.75m3-2v2.5m2.25 0v2M8.75 11v4.5m3-5.75V11m3-1v1M17 12v3.5q0 1.875-.75 3m-1.75 2.25c-.75.5-1.75.75-2.75.75s-1.75-.25-2.5-.75M7 19.25L5.5 17M4 14.75c-.5-1.25-.25-2.25.75-2.5c.5-.15 1 0 1.5.5");
}
</style><path class="d-0_c63rg"/>`,
		"fallback": "uix:numbness",
	});
}

export default Component;
