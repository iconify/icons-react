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
		"content": `<style>.pw492ibua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a7.5 7.5 0 0 1 15 0Zm-2 0h19v3h-19ZM12 7.25V9.5m-1.5-2.25h3M4.5 6L6 7.5M19.5 6L18 7.5");
}
</style><path class="pw492ibua"/>`,
		"fallback": "uix-sharp:staff-call",
	});
}

export default Component;
