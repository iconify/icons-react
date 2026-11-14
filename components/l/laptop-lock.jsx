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
		"content": `<style>.slt7slekb {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w01b8h-fv {
  d: path("M9.5 10h5v3.5h-5Zm1 0V9a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="ulnmmdpxh"><path class="slt7slekb"/><path class="w01b8h-fv"/></g>`,
		"fallback": "uix-sharp:laptop-lock",
	});
}

export default Component;
