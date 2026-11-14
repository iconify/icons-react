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
		"content": `<style>.s35oombok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19m-14 0l-1 2.75M5 9.75l2.75 1l-1.25 6l-4.25-1.5Zm7-2.25v3m-1.5 0h3l.75 6h-4.5Zm6-3l1 2.75m1.5-.5l-2.75 1l1.25 6l4.25-1.5Z");
}
</style><path class="s35oombok"/>`,
		"fallback": "uix-sharp:track-lighting",
	});
}

export default Component;
