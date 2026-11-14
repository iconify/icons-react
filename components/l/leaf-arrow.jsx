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
		"content": `<style>.mbf_prywz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.784 17.675c-1.894.708-4.08 1.075-6.534 1.075c0-9.5 5.5-15 15-15c0 3.065-.573 5.714-1.667 7.896M3.75 20.25l1.5-1.5m0 0l8.25-8.25M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="mbf_prywz"/>`,
		"fallback": "uix-sharp:leaf-arrow",
	});
}

export default Component;
