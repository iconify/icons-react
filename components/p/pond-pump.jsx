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
		"content": `<style>.ljjv0qblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13H15v8H2.5Zm6.25 0V9c0-3.75 2.5-6 5.75-6s5 2.5 5 6m0 3c1.25 1.5 1.75 2.5 1.75 3.5a1.75 1.75 0 0 1-3.5 0c0-1 .5-2 1.75-3.5Z");
}
</style><path class="ljjv0qblb"/>`,
		"fallback": "uix-sharp:pond-pump",
	});
}

export default Component;
