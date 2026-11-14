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
		"content": `<style>.e73t7cbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12C6 9 7.5 3.5 12 3.5S18 9 16.5 12Zm2 0h5v2.5h-5ZM8 14.5h8V21H8Z");
}
</style><path class="e73t7cbts"/>`,
		"fallback": "uix-sharp:shaving-brush",
	});
}

export default Component;
