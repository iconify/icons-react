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
		"content": `<style>.df9miabit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5v15m0-7.5h15.5A2.5 2.5 0 0 1 21 15v5M3 16.5h18m-15.5-8h5V11h-5Zm8-2l2 2l4-4.5");
}
</style><path class="df9miabit"/>`,
		"fallback": "uix-sharp:make-the-bed",
	});
}

export default Component;
