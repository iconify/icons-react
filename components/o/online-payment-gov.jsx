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
		"content": `<style>.dsj6vsbcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.3 15.5H4.5v-11h15v8.8m-2.2 2.2h-1.1m-13.7 3h8.8m3.45-.5l2 2L21 15.75");
}
</style><path class="dsj6vsbcw"/>`,
		"fallback": "uix-sharp:online-payment-gov",
	});
}

export default Component;
