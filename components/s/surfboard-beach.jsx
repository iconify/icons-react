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
		"content": `<style>.djzch5blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21C5 14 8 6 12 3c4 3 7 11 4 18c-3.5 1-5 1-8 0Zm4-17.5v17");
}
</style><path class="djzch5blv"/>`,
		"fallback": "uix-sharp:surfboard-beach",
	});
}

export default Component;
