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
		"content": `<style>.h75r56txx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5L12 3l6.5 4.5Zm1.5 0h10V12H7ZM8.25 12L6.5 21.5m9.25-9.5l1.75 9.5m-10-5h9");
}
</style><path class="h75r56txx"/>`,
		"fallback": "uix-sharp:watchtower",
	});
}

export default Component;
