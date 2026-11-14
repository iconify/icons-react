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

.o697u6f-m {
  d: path("M11 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.o7ympqbbx {
  d: path("M14 10.5V12l1.25.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="o697u6f-m"/><path class="o7ympqbbx"/></g>`,
		"fallback": "uix-sharp:price-tag-clock",
	});
}

export default Component;
