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
		"content": `<style>.yd1nd_blt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10c6 0 10.5 4.5 10.5 10.5C14.5 20.5 10 16 10 10Zm0 0L8 8m2 2l6 6M2.75 11Q4.5 3 13 3.5");
}
</style><path class="yd1nd_blt"/>`,
		"fallback": "uix-sharp:leaf-single-fall",
	});
}

export default Component;
