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
		"content": `<style>.plgn5ebnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.61 6.5a4.5 4.5 0 0 1 8.78 0a4.25 4.25 0 0 1 1.34 8.32A3.25 3.25 0 0 1 12 16.58a3.25 3.25 0 0 1-5.73-1.76A4.25 4.25 0 0 1 7.61 6.5ZM12 17.75v3.5m-2.5 0h5");
}
</style><path class="plgn5ebnc"/>`,
		"fallback": "iconoven:oak-tree-sharp",
	});
}

export default Component;
