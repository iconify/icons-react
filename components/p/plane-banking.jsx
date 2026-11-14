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
		"content": `<style>.l-r0qwbxl {
  d: path("m15 3.304l.083 2.357l-1.25 2.165l3.046 5.223l-.75 1.299l-3.921-3.707l-1.125 1.948l.765 2.174l-5.196-3l2.265-.424l1.125-1.948l-5.171-1.543l.75-1.299l6.046.027l1.25-2.165ZM3.5 16a11 11 0 0 0 17 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfhlhzb4o {
  d: path("m17.5 16.5l3-.5v3");
}
</style><g class="ulnmmdpxh"><path class="l-r0qwbxl"/><path class="zfhlhzb4o"/></g>`,
		"fallback": "uix-sharp:plane-banking",
	});
}

export default Component;
