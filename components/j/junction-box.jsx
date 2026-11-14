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
		"content": `<style>.a4w_o_bst {
  d: path("M6 4h12v16H6Zm-4 8h4m12 0h4");
}

.o_j1wbbzw {
  d: path("M9 9.5h6v5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a4w_o_bst"/><path class="o_j1wbbzw"/></g>`,
		"fallback": "uix-sharp:junction-box",
	});
}

export default Component;
