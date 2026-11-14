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
		"content": `<style>.mrb4cv7_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3h5v6h-5ZM12 9v12.5m-3.5 0h7m.75-19a5.5 5.5 0 0 1 0 7");
}
</style><path class="mrb4cv7_h"/>`,
		"fallback": "uix-sharp:small-cell-pole",
	});
}

export default Component;
