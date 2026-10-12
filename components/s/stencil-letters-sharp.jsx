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
		"content": `<style>.mli0-4b_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v16.5H2.75zm6 8.75l1.75-5m3 0l1.75 5m-6.5 0h6.5m-7.55 3l-.7 2m9.3-2l.7 2");
}
</style><path class="mli0-4b_w"/>`,
		"fallback": "iconoven:stencil-letters-sharp",
	});
}

export default Component;
