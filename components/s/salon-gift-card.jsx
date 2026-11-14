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
		"content": `<style>.k_j3bxpvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19v13h-19Zm5.5 0C6.5 3 3 3 3.75 5.75C4.25 7.25 6 7.5 8 7.5Zm0 0C9.5 3 13 3 12.25 5.75C11.75 7.25 10 7.5 8 7.5Zm0 0V13m5 3.5h5");
}
</style><path class="k_j3bxpvs"/>`,
		"fallback": "uix-sharp:salon-gift-card",
	});
}

export default Component;
