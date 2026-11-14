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
		"content": `<style>.ypp0kabxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5h11v11h-11Zm3.25 0v-4m4.5 4v-4m6.5-1.75l.75 1.75l1.75.75L18.5 7l-.75 1.75L17 7l-1.75-.75L17 5.5Z");
}
</style><path class="ypp0kabxy"/>`,
		"fallback": "uix-sharp:plugin-ai",
	});
}

export default Component;
