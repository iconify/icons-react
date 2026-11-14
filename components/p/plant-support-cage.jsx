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
		"content": `<style>.sc4s7fw5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 7l3.5 14.5M20 7l-3.5 14.5M4.75 10h14.5m-13 6.5h11.5m-5.75 5V6m0 0c0-2 2-3.5 4.5-3.5c0 2-2 3.5-4.5 3.5Z");
}
</style><path class="sc4s7fw5l"/>`,
		"fallback": "uix-sharp:plant-support-cage",
	});
}

export default Component;
