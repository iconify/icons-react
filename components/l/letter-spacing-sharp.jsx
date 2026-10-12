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
		"content": `<style>.l5-x14brb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 14.25l6-10.5l6 10.5M8.2 10.5h7.6M3.75 19h16.5m-14.5-2l-2 2l2 2m12.5-4l2 2l-2 2");
}
</style><path class="l5-x14brb"/>`,
		"fallback": "iconoven:letter-spacing-sharp",
	});
}

export default Component;
