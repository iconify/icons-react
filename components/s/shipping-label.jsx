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
		"content": `<style>.otodmt-bv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5h9A3.5 3.5 0 0 1 20 7v10a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17V7a3.5 3.5 0 0 1 3.5-3.5m0 4.5H12m-4 4v5m2.5-5v5m2.5-5v5m3-5v5");
}
</style><path class="otodmt-bv"/>`,
		"fallback": "uix:shipping-label",
	});
}

export default Component;
