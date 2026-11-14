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
		"content": `<style>.kdmwsxdku {
  d: path("M8.5 18.5q4-3 8 0");
}

.loiwzx-lp {
  d: path("m4 10.5l1.75 9.25a2 2 0 0 0 2 1.75h8.5a2 2 0 0 0 2-1.75L20 10.5m-17.5 0h19m-5.5-8l-3.5 14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="loiwzx-lp"/><path class="kdmwsxdku"/></g>`,
		"fallback": "uix-sharp:spin-mop",
	});
}

export default Component;
