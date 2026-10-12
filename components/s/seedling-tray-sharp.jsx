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
		"content": `<style>.t7lm6x30v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.55 13.25h17.7l-.15.79l-1.2 6.42l-.15.79H4.25l-.15-.79l-1.2-6.42l-.15-.79zm4.95 0v8m7-8v8m-10-8V10m6.5 3.25V9m6.5 4.25V10m-13 0c0-1.75 1.1-2.75 3-2.75C8.5 9 7.4 10 5.5 10ZM12 9c0-2 1.25-3.25 3.5-3.25c0 2-1.25 3.25-3.5 3.25Zm0 0c0-2-1.25-3.25-3.5-3.25C8.5 7.75 9.75 9 12 9Zm6.5 1c0-1.75-1.1-2.75-3-2.75c0 1.75 1.1 2.75 3 2.75Z");
}
</style><path class="t7lm6x30v"/>`,
		"fallback": "iconoven:seedling-tray-sharp",
	});
}

export default Component;
