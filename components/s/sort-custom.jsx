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
		"content": `<style>.se7_hstrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6H17m-7.5 6H21M9.5 18H14M4.5 5v14m-2-12l2-2l2 2m-4 10l2 2l2-2");
}
</style><path class="se7_hstrz"/>`,
		"fallback": "uix-sharp:sort-custom",
	});
}

export default Component;
