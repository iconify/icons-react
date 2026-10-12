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
		"content": `<style>.lrsiu3b_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h13v12H5zm10 3h-2.5m2.5 3h-1.5m1.5 3h-2.5m-1-9V2.75H8V4.5m0 15v1.75");
}
</style><path class="lrsiu3b_l"/>`,
		"fallback": "iconoven:urine-bag-sharp",
	});
}

export default Component;
