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
		"content": `<style>.xeifybjna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a12 12 0 0 1 14-14a12 12 0 0 1-14 14Zm4-4l6-6m-6 4l2 2m0-4l2 2m0-4l2 2m6 13.5c-2.25-2.25-3.25-3.5-3.25-4.75a3.25 3.25 0 0 1 6.5 0c0 1.25-1 2.5-3.25 4.75Z");
}
</style><path class="xeifybjna"/>`,
		"fallback": "uix-sharp:rugby-ball-location",
	});
}

export default Component;
