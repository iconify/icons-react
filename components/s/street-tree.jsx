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
		"content": `<style>.snpvptb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15a3.5 3.5 0 0 1-1-6.5a5.75 5.75 0 0 1 11 0a3.5 3.5 0 0 1-1 6.5Zm4.5 0v6m0-3l3-3m-8 6h10");
}
</style><path class="snpvptb7t"/>`,
		"fallback": "uix-sharp:street-tree",
	});
}

export default Component;
