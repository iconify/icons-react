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
		"content": `<style>.d6d74_j8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.75h5.5V6h-5.5zM10 6L7 20.5l1.5.75M14 6l3 14.5l-1.5.75");
}
</style><path class="d6d74_j8l"/>`,
		"fallback": "iconoven:tweezers-sharp",
	});
}

export default Component;
