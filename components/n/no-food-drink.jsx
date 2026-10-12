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
		"content": `<style>.dw1urpb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.25v3m3-3V21m3-7.75v3m0 0a3 3 0 0 1-6 0M17 3c1.75 1 2.75 3 2.75 5.5V10H17Zm0 7v3.75m-13.25-10l16.5 16.5");
}
</style><path class="dw1urpb8o"/>`,
		"fallback": "iconoven:no-food-drink",
	});
}

export default Component;
