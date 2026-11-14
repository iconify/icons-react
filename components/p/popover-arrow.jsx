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
		"content": `<style>.px0mdhmwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5A2.5 2.5 0 0 1 5 7h4l3-3.5L15 7h4a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 18Zm4 2.5h11m-11 4H13");
}
</style><path class="px0mdhmwc"/>`,
		"fallback": "uix-sharp:popover-arrow",
	});
}

export default Component;
