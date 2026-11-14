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
		"content": `<style>.m41uptbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5h9A3.5 3.5 0 0 1 20 7v7a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 14V7a3.5 3.5 0 0 1 3.5-3.5m4.5 14V21m0-14v6m0 3.5h.01");
}
</style><path class="m41uptbil"/>`,
		"fallback": "uix:warehouse-safety-sign",
	});
}

export default Component;
