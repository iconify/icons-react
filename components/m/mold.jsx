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
		"content": `<style>.qcj97cc9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5C2.75 5 5.5 2.75 8.5 3c3.25 0 5 2.5 4.5 5c.25 3-2 5.25-5 5c-3.25.5-5-1.75-5-4.5m10 9c-.25-3 2-4.75 4.5-4.5c2.75 0 3.75 2.25 3.5 4.25c0 2.5-2 4-4.25 3.75c-2.25.25-3.75-1.25-3.75-3.5m-8.75 1a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M17.5 6h.01m2.99 3.25h.01");
}
</style><path class="qcj97cc9w"/>`,
		"fallback": "uix:mold",
	});
}

export default Component;
