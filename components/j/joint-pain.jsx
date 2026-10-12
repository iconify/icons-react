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
		"content": `<style>.fe4rd2byy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.75h3.5V8.5c1.25.25 2 1.1 2 2.25h-7.5c0-1.15.75-2 2-2.25Zm0 18.5h3.5V15.5c1.25-.25 2-1.1 2-2.25h-7.5c0 1.15.75 2 2 2.25ZM3.5 9.75L6 11m-2.5 3.25L6 13m14.5-3.25L18 11m2.5 3.25L18 13");
}
</style><path class="fe4rd2byy"/>`,
		"fallback": "iconoven:joint-pain",
	});
}

export default Component;
