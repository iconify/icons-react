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
		"content": `<style>.feha28aaq {
  d: path("M6 14.5h12M8.5 12L6 14.5L8.5 17m7-5l2.5 2.5l-2.5 2.5");
}

.hp9ld3byv {
  d: path("M2.5 3.5h19v17h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hp9ld3byv"/><path class="feha28aaq"/></g>`,
		"fallback": "uix-sharp:viewport",
	});
}

export default Component;
