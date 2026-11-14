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
		"content": `<style>.ezbazrxpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h7M3 14h7m-7 6h18M17.5 4L13 11h4l-2 5.5L20.5 9h-4Z");
}
</style><path class="ezbazrxpz"/>`,
		"fallback": "uix-sharp:quick-links",
	});
}

export default Component;
