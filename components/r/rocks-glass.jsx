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
		"content": `<style>.fnp1yvbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.89 7h10.22a1.75 1.75 0 0 1 1.745 1.884l-.731 9.5A1.75 1.75 0 0 1 16.379 20H7.621a1.75 1.75 0 0 1-1.745-1.616l-.731-9.5A1.75 1.75 0 0 1 6.89 7M5.75 17h12.5");
}
</style><path class="fnp1yvbqz"/>`,
		"fallback": "uix:rocks-glass",
	});
}

export default Component;
