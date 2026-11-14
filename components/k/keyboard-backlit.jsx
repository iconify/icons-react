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
		"content": `<style>.q4o6qnbqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 10h20v10H2Zm4 3.5h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M8.5 16.75h7M12 3v3M6 4l1.5 2.5M18 4l-1.5 2.5");
}
</style><path class="q4o6qnbqd"/>`,
		"fallback": "uix-sharp:keyboard-backlit",
	});
}

export default Component;
