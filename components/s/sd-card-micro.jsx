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
		"content": `<style>.bn3w61bmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5h6A1.5 1.5 0 0 1 17 6.5V18a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 18V7.5Zm.5 9v3m2-3v3m2-3v3");
}
</style><path class="bn3w61bmt"/>`,
		"fallback": "uix-sharp:sd-card-micro",
	});
}

export default Component;
