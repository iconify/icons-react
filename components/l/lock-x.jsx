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
		"content": `<style>.dldh1_p7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-2.25A4.375 4.375 0 0 1 8.875 10M8 10V7a4 4 0 0 1 8 0v3m-6 3.5l4 4m0-4l-4 4");
}
</style><path class="dldh1_p7a"/>`,
		"fallback": "uix:lock-x",
	});
}

export default Component;
