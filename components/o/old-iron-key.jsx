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
		"content": `<style>.h-q-0xbtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 8l4 4l-4 4l-4-4Zm4 4h11m-8.5-2v4m4.5-2v3.5h1.5V14H20v1.5h1V12");
}
</style><path class="h-q-0xbtd"/>`,
		"fallback": "uix-sharp:old-iron-key",
	});
}

export default Component;
