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
		"content": `<style>.pdznmacxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.454 18.62C6.798 16.011 3.5 10.991 3.5 5.5c0-1.1.9-2 2-2h3c.8 0 1.3.5 1.5 1.25l.75 3c.15.75-.15 1.35-.75 1.75l-1.5 1c.875 1.824 1.751 3.009 3.169 3.982M14.25 6.5a3.25 3.25 0 0 1 3.25 3.25m-2.705-6.226a6.25 6.25 0 0 1 5.681 5.681M16 14.25h4c.95 0 1.75.8 1.75 1.75v2c0 .95-.8 1.75-1.75 1.75h-2.5l-2 1.75v-2c-.75-.25-1.25-.75-1.25-1.5v-2c0-.95.8-1.75 1.75-1.75");
}
</style><path class="pdznmacxp"/>`,
		"fallback": "uix:phone-consultation",
	});
}

export default Component;
