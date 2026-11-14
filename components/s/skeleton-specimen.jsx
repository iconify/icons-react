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
		"content": `<style>.m9-acq8jm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8C2 8 2 16 5.5 16Zm0 4H19m0 0l2.75-3M19 12l2.75 3M8.25 7.5v9M11 8v8m2.75-7.25v6.5m2.75-5.5v4.5");
}
</style><path class="m9-acq8jm"/>`,
		"fallback": "uix-sharp:skeleton-specimen",
	});
}

export default Component;
