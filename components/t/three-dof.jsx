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
		"content": `<style>.yd-b4-beg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15V3.5M6.75 5.75L9 3.5l2.25 2.25M9 15h11.5m-2.25-2.25L20.5 15l-2.25 2.25M9 15l-5.5 5.5m0-3v3h3m8-8a6 6 0 0 0-3-3");
}
</style><path class="yd-b4-beg"/>`,
		"fallback": "uix-sharp:three-dof",
	});
}

export default Component;
