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
		"content": `<style>.xv4cdb2zz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h6v6h-6ZM13 5h7.5M13 8.5h4.5M3.5 14h17m-17 5H14");
}
</style><path class="xv4cdb2zz"/>`,
		"fallback": "uix-sharp:loading-skeleton",
	});
}

export default Component;
