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
		"content": `<style>.zdpdchyag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 21c0-4.25 2.5-7 5.5-7s5.5 2.75 5.5 7M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm1.25 5.5c2.126 0 3.891.362 5.14 1.239M16.75 15h3v4.75h-3Zm1.5 4.75v2");
}
</style><path class="zdpdchyag"/>`,
		"fallback": "uix-sharp:media-interview",
	});
}

export default Component;
