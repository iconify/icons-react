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
		"content": `<style>.v6izuf41q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.25A2.625 2.625 0 0 1 10.5 5.625v2.25A2.625 2.625 0 0 1 7.875 10.5h-2.25A2.625 2.625 0 0 1 3 7.875v-2.25A2.625 2.625 0 0 1 5.625 3m10.5 0h2.25A2.625 2.625 0 0 1 21 5.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-2.25A2.625 2.625 0 0 1 13.5 7.875v-2.25A2.625 2.625 0 0 1 16.125 3m-10.5 10.5h2.25a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 7.875 21h-2.25A2.625 2.625 0 0 1 3 18.375v-2.25A2.625 2.625 0 0 1 5.625 13.5m10.951 1.38l1.544.827a1.75 1.75 0 0 1 0 3.086l-1.544.827A1.75 1.75 0 0 1 14 18.077v-1.654a1.75 1.75 0 0 1 2.576-1.543");
}
</style><path class="v6izuf41q"/>`,
		"fallback": "uix:media-library-grid",
	});
}

export default Component;
