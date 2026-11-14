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
		"content": `<style>.n3m9l2b9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11.5h18v10H3Zm6.75-9h4.5v2h-4.5ZM9 4.5h6v7H9Zm-6 10h18m-9 0v3");
}
</style><path class="n3m9l2b9f"/>`,
		"fallback": "uix-sharp:mail-order-pharmacy",
	});
}

export default Component;
