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
		"content": `<style>.itwcg2bdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l5 6h-2l4 5h-2.5l4 5h-17l4-5H5l4-5H7Zm0 16v3");
}
</style><path class="itwcg2bdj"/>`,
		"fallback": "uix-sharp:pine-tree",
	});
}

export default Component;
