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
		"content": `<style>.rinfjxphk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21h17m-13 0c-2-5 2-9-.5-14m5 14c-2-5.5 2-10-.5-16.5m5 16.5c-2-5 2-9-.5-13.5M17.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="rinfjxphk"/>`,
		"fallback": "uix-sharp:sea-grass",
	});
}

export default Component;
