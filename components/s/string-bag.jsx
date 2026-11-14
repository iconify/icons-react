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
		"content": `<style>.z9qwuabud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h17l-1.75 10c-.25 1.5-1.75 2.5-3.25 2.5h-7c-1.5 0-3-1-3.25-2.5ZM7 9c0-5.5 3.5-5.5 3.5 0m3 0c0-5.5 3.5-5.5 3.5 0M4.25 13.25L8.5 9m-3 10.5L16 9m-4 12.5l7.75-8m0-.25L15.5 9m3 10.5L8 9m4 12.5l-7.75-8");
}
</style><path class="z9qwuabud"/>`,
		"fallback": "uix:string-bag",
	});
}

export default Component;
