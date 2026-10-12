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
		"content": `<style>.ja6db9d-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5a1 1 0 0 1 1-1H6.5L11 4.75v14.5L6.5 15.5H3.75a1 1 0 0 1-1-1Zm11.5-2c2.5 0 3 4.5 5.25 4.5h1.75m-7 4.5c2.5 0 3-4.5 5.25-4.5");
}
</style><path class="ja6db9d-r"/>`,
		"fallback": "iconoven:mono-audio",
	});
}

export default Component;
