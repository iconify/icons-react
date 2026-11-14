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
		"content": `<style>.mfrz5vgvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17c0 5.5-3.75 9-8.5 9s-8.5-3.5-8.5-9Zm11-2.5l5-5");
}
</style><path class="mfrz5vgvb"/>`,
		"fallback": "uix-sharp:meditation-bell",
	});
}

export default Component;
