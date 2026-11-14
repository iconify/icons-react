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
		"content": `<style>.pssocvb3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h4l8-5v16l-8-5h-4ZM7 15l1 5M19.75 8.25a5.5 5.5 0 0 1 0 7.5");
}
</style><path class="pssocvb3b"/>`,
		"fallback": "uix-sharp:message-channel",
	});
}

export default Component;
