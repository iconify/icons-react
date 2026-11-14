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

.yji2l03lf {
  d: path("M16.5 9.5a3.25 3.25 0 1 0 0 5m-5.75-3.25h4m-4 1.5h4");
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="yji2l03lf"/></g>`,
		"fallback": "uix-sharp:price-tag-euro",
	});
}

export default Component;
