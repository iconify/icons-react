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
		"content": `<style>.nnbv0ubrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h.01m3.99 0h12m-8 7.5h8m-8 6.5h8M4.5 8v8A2.5 2.5 0 0 0 7 18.5h2M4.5 12H9");
}
</style><path class="nnbv0ubrw"/>`,
		"fallback": "uix-sharp:list-tree",
	});
}

export default Component;
