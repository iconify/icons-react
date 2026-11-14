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
		"content": `<style>.ixc9itwgo {
  d: path("M11.5 3h8l-2 3.5h-4Zm3 10.5H18l3.5 3.5v4.5h-7Zm2.25 5.5h2.5");
}

.m16usewkl {
  d: path("M3.5 21h6m-3 0V9m0 0a6 6 0 0 1 6-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m16usewkl"/><path class="ixc9itwgo"/></g>`,
		"fallback": "uix-sharp:street-light-report",
	});
}

export default Component;
