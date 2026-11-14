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
		"content": `<style>.n7_x_c0ff {
  d: path("M7 17H5.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H17v-3H7Zm-1-7V6.25h9.5V10");
}

.u4ersp0mk {
  d: path("M9 6.25V3h9.5v7M7 14h10v7H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n7_x_c0ff"/><path class="u4ersp0mk"/></g>`,
		"fallback": "uix-sharp:print-queue",
	});
}

export default Component;
