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
		"content": `<style>.q6eenlb0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v13H4ZM4 20h16M6 18.25L4 20l2 1.75m12-3.5L20 20l-2 1.75");
}
</style><path class="q6eenlb0t"/>`,
		"fallback": "uix-sharp:measuring-room",
	});
}

export default Component;
