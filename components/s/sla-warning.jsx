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
		"content": `<style>.kahx6spag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h11m-11 19h8.3m-6.3-19C6.5 8 10 9.5 10 12s-3.5 4-3.5 9.5m7-19c0 5.5-3.5 7-3.5 9.5c0 1.845 1.906 3.145 2.905 5.91m6.417-1.192l1.245 2.324a1.5 1.5 0 0 1-1.322 2.208h-2.49a1.5 1.5 0 0 1-1.322-2.208l1.245-2.324a1.5 1.5 0 0 1 2.644 0M18 18.75h.01");
}
</style><path class="kahx6spag"/>`,
		"fallback": "uix:sla-warning",
	});
}

export default Component;
