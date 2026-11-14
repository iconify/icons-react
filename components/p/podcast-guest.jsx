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
		"content": `<style>.oq3bfwb9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 21.5c0-4 2.25-6.5 5.5-6.5s5.5 2.5 5.5 6.5M14 4a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 22 4v3.5A1.5 1.5 0 0 1 20.5 9h-4L14 11Zm4 8.5za2 2 0 0 1 2 2v1a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m0 5v4");
}
</style><path class="oq3bfwb9p"/>`,
		"fallback": "uix:podcast-guest",
	});
}

export default Component;
