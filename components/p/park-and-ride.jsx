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
		"content": `<style>.qyc5wgb4z {
  d: path("M5.25 5.25h6.5v5h-6.5Zm.5 8.75h.01m5.49 0h.01m6.24 7.75V15h2a2.25 2.25 0 0 1 0 4.5h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwl5xrb2r {
  d: path("M2.5 2.5h12v15h-12Zm3 15V20m6-2.5V20");
}
</style><g class="ulnmmdpxh"><path class="wwl5xrb2r"/><path class="qyc5wgb4z"/></g>`,
		"fallback": "uix-sharp:park-and-ride",
	});
}

export default Component;
