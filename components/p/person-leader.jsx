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
		"content": `<style>.j43uxqb4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-3 11c0-3.5 2.5-5.25 5.5-5.25s5.5 1.75 5.5 5.25M3.5 6A1.75 1.75 0 1 0 7 6a1.75 1.75 0 1 0-3.5 0ZM2 13.75a3.25 3.25 0 0 1 4.875-2.815M17 6a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 17 6Zm.125 4.935A3.25 3.25 0 0 1 22 13.75");
}
</style><path class="j43uxqb4r"/>`,
		"fallback": "uix-sharp:person-leader",
	});
}

export default Component;
