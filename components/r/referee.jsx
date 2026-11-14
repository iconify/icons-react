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
		"content": `<style>.pg6u_bc_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-4 3.5-6.5 8-6.5q.604 0 1.181.059M16.75 16h5v3H19.5a2.75 2.75 0 1 1-2.75-3Z");
}
</style><path class="pg6u_bc_g"/>`,
		"fallback": "uix-sharp:referee",
	});
}

export default Component;
