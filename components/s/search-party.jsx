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
		"content": `<style>.f9ls0vb7f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 20v-1a4 4 0 0 1 8 0v1m4-12A2.75 2.75 0 1 0 20 8a2.75 2.75 0 1 0-5.5 0Zm.75 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><path class="f9ls0vb7f"/>`,
		"fallback": "uix-sharp:search-party",
	});
}

export default Component;
