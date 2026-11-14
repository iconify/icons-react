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
		"content": `<style>.dw4ci8w_k {
  d: path("M7 14.5c1.5-2 3-2.75 5-2.75s3.5.75 5 2.75c-1.5 2-3 2.75-5 2.75s-3.5-.75-5-2.75Zm5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2hyracve {
  d: path("M3.5 11L12 3.5l8.5 7.5v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19Z");
}
</style><g class="ulnmmdpxh"><path class="w2hyracve"/><path class="dw4ci8w_k"/></g>`,
		"fallback": "uix-sharp:neighbourhood-watch",
	});
}

export default Component;
