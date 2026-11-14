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
		"content": `<style>.et444bb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5a13 13 0 0 1 15-15a13 13 0 0 1-15 15ZM9 15l6-6m-6 4l2 2m0-4l2 2m0-4l2 2");
}
</style><path class="et444bb-s"/>`,
		"fallback": "uix-sharp:rugby-ball",
	});
}

export default Component;
