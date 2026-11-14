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
		"content": `<style>.j_vwujb4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5V13m0 0c0-3-2-5-5.5-5c0 3 2 5 5.5 5Zm0 0c0-3.5 1.5-6 4-6c0 3-1.5 5.25-4 6Zm9.5 7.5V4M16 6.5L18.5 4L21 6.5");
}
</style><path class="j_vwujb4y"/>`,
		"fallback": "uix-sharp:plant-growth-arrow",
	});
}

export default Component;
