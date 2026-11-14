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
		"content": `<style>.ejuca_e4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a7 7 0 0 0 10 10Zm5 5l4-4m0-3a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6M18 14.75v3.5M18 21h.01");
}
</style><path class="ejuca_e4v"/>`,
		"fallback": "uix:satellite-dish-alert",
	});
}

export default Component;
