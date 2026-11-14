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
		"content": `<style>.qa4dc3b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 21c0-3.5 2-5.5 5-5.5s5 2 5 5.5M15 2.5h5A1.5 1.5 0 0 1 21.5 4v6a1.5 1.5 0 0 1-1.5 1.5h-2.5L15 14v-2.5a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 15 2.5Z");
}
</style><path class="qa4dc3b9k"/>`,
		"fallback": "uix-sharp:psychiatrist",
	});
}

export default Component;
