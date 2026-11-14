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
		"content": `<style>.b4wvrbp6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10V5A2.5 2.5 0 0 1 9 2.5h6A2.5 2.5 0 0 1 17.5 5v5m-11 4v5A2.5 2.5 0 0 0 9 21.5h6a2.5 2.5 0 0 0 2.5-2.5v-5M3 10h18v4H3Zm7.75-4.75h2.5m-2.5 13.5h2.5");
}
</style><path class="b4wvrbp6r"/>`,
		"fallback": "uix-sharp:phone-armband",
	});
}

export default Component;
