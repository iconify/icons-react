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
		"content": `<style>.ceqe5bb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h8.5v17H3Zm0 3h8.5M3 17.5h8.5m0-9l6 3m-3 3l3-3l3 3v6h-6Zm3 .75h.01");
}
</style><path class="ceqe5bb4x"/>`,
		"fallback": "uix-sharp:price-per-item",
	});
}

export default Component;
