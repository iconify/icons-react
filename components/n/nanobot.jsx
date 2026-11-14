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
		"content": `<style>.qa8j4gbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7h13v10h-13ZM12 3v4M8.5 17l-2 4m9-4l2 4M9 12h.01M15 12h.01");
}
</style><path class="qa8j4gbyo"/>`,
		"fallback": "uix-sharp:nanobot",
	});
}

export default Component;
