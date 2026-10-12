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
		"content": `<style>.r9xn1eb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9c0-4.5 7-4.5 7 0M2.75 9h18.5v11H2.75zm4.5.5v10m9.5-10v10m-7.25-7h5");
}
</style><path class="r9xn1eb-r"/>`,
		"fallback": "iconoven:travel-bag-sharp",
	});
}

export default Component;
