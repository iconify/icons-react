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
		"content": `<style>.isvd49b0q {
  d: path("M5 12q3.5-1.5 7 0t7 0");
}

.jz0d_uhtt {
  d: path("M4.5 8h15L18 20.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm0 0a7.5 5.5 0 0 1 15 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jz0d_uhtt"/><path class="isvd49b0q"/></g>`,
		"fallback": "uix-sharp:paint-bucket",
	});
}

export default Component;
