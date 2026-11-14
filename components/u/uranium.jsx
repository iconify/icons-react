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
		"content": `<style>.kbyd90blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8.5L7.25 3.75a9.5 9.5 0 0 1 9.5 0L14 8.5a4 4 0 0 0-4 0Zm6 3.5h5.5a9.5 9.5 0 0 1-4.75 8.25L14 15.5a4 4 0 0 0 2-3.5Zm-6 3.5l-2.75 4.75A9.5 9.5 0 0 1 2.5 12H8a4 4 0 0 0 2 3.5Zm.75-3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="kbyd90blw"/>`,
		"fallback": "uix-sharp:uranium",
	});
}

export default Component;
