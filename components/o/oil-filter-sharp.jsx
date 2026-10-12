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
		"content": `<style>.mlj0oxbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.75h8v3H8zm-2.75 3h13.5v15.5H5.25zM9 9.5v8m3-8v8m3-8v8");
}
</style><path class="mlj0oxbmr"/>`,
		"fallback": "iconoven:oil-filter-sharp",
	});
}

export default Component;
