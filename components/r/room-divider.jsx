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
		"content": `<style>.e1o1le5ux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V6.5a3 3 0 0 1 6 0a3 3 0 0 1 6 0a3 3 0 0 1 6 0V21M3 18.5h18M9 6.5v12m6-12v12");
}
</style><path class="e1o1le5ux"/>`,
		"fallback": "uix-sharp:room-divider",
	});
}

export default Component;
