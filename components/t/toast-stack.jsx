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
		"content": `<style>.cc7qr3bwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 8.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.75A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-2.75A4.375 4.375 0 0 1 6.875 8.5M4.5 8.5V7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v1.5M6 12.5h9.5m-9.5 4h5");
}
</style><path class="cc7qr3bwd"/>`,
		"fallback": "uix:toast-stack",
	});
}

export default Component;
