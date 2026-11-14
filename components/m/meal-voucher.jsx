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
		"content": `<style>.djg1i45mc {
  d: path("M7.5 10.5c0 1.25 3 1.25 3 0m-1.5 1V16m6-2.75V16m0-2.75V8c1.5.75 2 2.75 1.5 5.25Z");
}

.n9-5c5bbt {
  d: path("M3 5.5h18V10a2 2 0 0 0 0 4v4.5H3V14a2 2 0 0 0 0-4ZM7.5 8v2.5M9 8v2.5M10.5 8v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n9-5c5bbt"/><path class="djg1i45mc"/></g>`,
		"fallback": "uix-sharp:meal-voucher",
	});
}

export default Component;
