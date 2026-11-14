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
		"content": `<style>.sc9unebcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v17h-19Zm4 4.5h.01M9.5 8h8m-11 4h.01m2.99 0h8m-11 4h.01m2.99 0h5");
}
</style><path class="sc9unebcz"/>`,
		"fallback": "uix-sharp:layout-list-compact",
	});
}

export default Component;
