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
		"content": `<style>.s7wk1r_ll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m0-18h13l-3 4.25L17 12H4m14 9v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="s7wk1r_ll"/>`,
		"fallback": "uix-sharp:priority-raise",
	});
}

export default Component;
