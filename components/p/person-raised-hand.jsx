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
		"content": `<style>.r4-2i_txf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 8v6.5M7 21l3-6.5l3 6.5m-7-9.5l4-3h4.5L16 3");
}
</style><path class="r4-2i_txf"/>`,
		"fallback": "uix-sharp:person-raised-hand",
	});
}

export default Component;
