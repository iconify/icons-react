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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xk45z3bkk {
  d: path("M7 14.5h10l-1.25 7h-7.5Zm5 0v-7c0-3.5 4-4.5 5.75-2");
}

.xpm6zi2wb {
  d: path("M17.75 5.5c2 1.5 2 4.5.5 6.25c-1.75-1.5-1.75-4.5-.5-6.25ZM12 9c-2.5-1-5.5-.25-6.5 2.5C8.5 12 11 11 12 9Z");
}
</style><g class="ulnmmdpxh"><path class="xk45z3bkk"/><path class="xpm6zi2wb"/></g>`,
		"fallback": "uix-sharp:plant-sick",
	});
}

export default Component;
