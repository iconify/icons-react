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

.qvl_xfsjm {
  d: path("M10.75 8.5c-.05-.7.5-1.15 1-1c.6.15.75.75.75 1.5v5c0 1.45 1.05 2.5 2.5 2.5c1.25 0 2.3-1.05 2.25-2.5c.05-1.1-.7-1.85-1.5-1.75m-5-1.75h3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="qvl_xfsjm"/></g>`,
		"fallback": "uix-sharp:price-tag-taka",
	});
}

export default Component;
