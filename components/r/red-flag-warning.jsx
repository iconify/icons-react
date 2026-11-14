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
		"content": `<style>.x1s8kjbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h10l-2 3.75L15 11H5Zm0-1v19M20 4v10m0 4.25h.01");
}
</style><path class="x1s8kjbaw"/>`,
		"fallback": "uix-sharp:red-flag-warning",
	});
}

export default Component;
