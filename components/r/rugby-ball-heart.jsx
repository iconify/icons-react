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
		"content": `<style>.oowz5v2wz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a12 12 0 0 1 14-14a12 12 0 0 1-14 14Zm4-4l6-6m-6 4l2 2m0-4l2 2m0-4l2 2m6 12.75l-2.5-2.5a1.75 1.75 0 0 1 2.5-2.5a1.75 1.75 0 0 1 2.5 2.5Z");
}
</style><path class="oowz5v2wz"/>`,
		"fallback": "uix-sharp:rugby-ball-heart",
	});
}

export default Component;
