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
		"content": `<style>.w8zg00hvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.75a4 3.5 0 1 0 8 0a4 3.5 0 1 0-8 0Zm0 0l-5-3.5v7Zm8 0l5-3.5v7Zm.5 7.25c-1.25 0-1.75 1-1.75 2.25s.75 1.75 1 2.75l.5 1.5l1.5-2l1.5 2l.5-1.5c.25-1 1-1.5 1-2.75S20.25 15 19 15c-.75 0-.75.5-1.25.5s-.5-.5-1.25-.5Z");
}
</style><path class="w8zg00hvh"/>`,
		"fallback": "uix-sharp:tooth-candy",
	});
}

export default Component;
