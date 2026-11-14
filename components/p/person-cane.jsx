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
		"content": `<style>.apvvnybzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM9 8v6.5M6.5 21L9 14.5l2.5 6.5M9 9.5l7 3m-3-2a1.5 1.5 0 0 1 3 0V21");
}
</style><path class="apvvnybzx"/>`,
		"fallback": "uix-sharp:person-cane",
	});
}

export default Component;
