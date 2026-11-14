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
		"content": `<style>.kdl65ezph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v17H3ZM15 7l2.5 2.5m0-2.5L15 9.5M6.5 13h11m-11 3.5H13");
}
</style><path class="kdl65ezph"/>`,
		"fallback": "uix-sharp:modal-close",
	});
}

export default Component;
