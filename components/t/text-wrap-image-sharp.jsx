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
		"content": `<style>.ritfembxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6h16.5M3.75 18h6m-6-6h13.5a3 3 0 0 1 0 6H14m2.25-2l-2 2l2 2");
}
</style><path class="ritfembxv"/>`,
		"fallback": "iconoven:text-wrap-image-sharp",
	});
}

export default Component;
