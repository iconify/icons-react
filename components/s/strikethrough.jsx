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
		"content": `<style>.qlj1adbkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7c-.6-1.7-2.3-2.5-4.5-2.5c-2.8 0-4.5 1.4-4.5 3.5c0 1.6 1.1 2.6 3 3.25m3 1.5c1.9.65 3 1.65 3 3.25c0 2.1-1.9 3.5-4.5 3.5c-2.4 0-4.1-.8-4.75-2.5M4 12h16");
}
</style><path class="qlj1adbkj"/>`,
		"fallback": "uix-sharp:strikethrough",
	});
}

export default Component;
