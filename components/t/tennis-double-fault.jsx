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
		"content": `<style>.kngt8z1oa {
  d: path("M2.75 6.5q4.75.5 6 4.75m5-4.75q4.75.5 6 4.75M15.5 15.5L21 21m0-5.5L15.5 21");
}

.n3o-vs7xv {
  d: path("M2.5 8a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n3o-vs7xv"/><path class="kngt8z1oa"/></g>`,
		"fallback": "uix-sharp:tennis-double-fault",
	});
}

export default Component;
