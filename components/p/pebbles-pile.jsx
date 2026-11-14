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
		"content": `<style>.gpsc9ezhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5a4.25 3 0 1 0 8.5 0a4.25 3 0 1 0-8.5 0Zm11.5.25a3.75 2.75 0 1 0 7.5 0a3.75 2.75 0 1 0-7.5 0ZM7.5 8.5a4.75 3.25 0 1 0 9.5 0a4.75 3.25 0 1 0-9.5 0Z");
}
</style><path class="gpsc9ezhq"/>`,
		"fallback": "uix-sharp:pebbles-pile",
	});
}

export default Component;
