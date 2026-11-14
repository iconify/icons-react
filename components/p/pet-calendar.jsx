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
		"content": `<style>.wa-_4-2qa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.3 21H3V4.5h18v7.4M8 2.5v4m8-4v4m-13 3h18m-13.5 4h.01m4.49 0h.01m-4.51 4h.01M16 20a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Zm-.25-3.75h.01m2.74-1.5h.01m2.74 1.5h.01");
}
</style><path class="wa-_4-2qa"/>`,
		"fallback": "uix-sharp:pet-calendar",
	});
}

export default Component;
