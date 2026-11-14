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
		"content": `<style>.rwkuu9j4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 7a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3.5 21.5c0-4.5 3.25-7.25 7.5-7.25c1.066 0 2.132.182 3.043.545M14.75 18l2 2L21 15.75");
}
</style><path class="rwkuu9j4e"/>`,
		"fallback": "uix-sharp:trusted-contact",
	});
}

export default Component;
