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
		"content": `<style>.qr3z9nnzx {
  d: path("M5.5 11a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.s8l_c9bns {
  d: path("M11.875 15.464a4.75 4.75 0 0 1-2.839-6.089M4 20.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qr3z9nnzx"/><path class="s8l_c9bns"/></g>`,
		"fallback": "uix-sharp:red-giant",
	});
}

export default Component;
