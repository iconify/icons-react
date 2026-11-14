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
		"content": `<style>.qftsn2b3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 5l2 8l2-8l2 8l4-8l4 8l2-8l2 8M6 18h12m-1.75-1.75L18 18l-1.75 1.75");
}
</style><path class="qftsn2b3r"/>`,
		"fallback": "uix-sharp:longitudinal-wave",
	});
}

export default Component;
