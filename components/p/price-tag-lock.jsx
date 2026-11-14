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
		"content": `<style>.h5ffsbcbr {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_r_o8bst {
  d: path("M11.5 12H17v4h-5.5Zm1.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="z_r_o8bst"/></g>`,
		"fallback": "uix-sharp:price-tag-lock",
	});
}

export default Component;
