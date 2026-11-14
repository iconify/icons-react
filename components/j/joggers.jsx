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
		"content": `<style>.jz9iiuoav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v3H5Zm1 3L6.5 18H10l2-9l2 9h3.5L18 5.5M6.5 18H10v3.5H6.5Zm7.5 0h3.5v3.5H14Z");
}
</style><path class="jz9iiuoav"/>`,
		"fallback": "uix-sharp:joggers",
	});
}

export default Component;
