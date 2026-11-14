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
		"content": `<style>.l5cn3cbva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5a3.5 3.5 0 0 1 7 0Zm-5 0h2.25m12.5 0h2.25M6.75 3.25l1 1m9.5-1l-1 1m-6.75 7L6.5 16m8-4.75l3 4.75M6.03 16h12.896a1.514 1.514 0 0 1 1.324 2.25l-.75 1.35a1.75 1.75 0 0 1-1.53.9H5.074a1.514 1.514 0 0 1-1.324-2.25l.75-1.35a1.75 1.75 0 0 1 1.53-.9");
}
</style><path class="l5cn3cbva"/>`,
		"fallback": "uix:light-estimation",
	});
}

export default Component;
