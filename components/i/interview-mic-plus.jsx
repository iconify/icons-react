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
		"content": `<style>.lpz56acxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21.5c0-4 3-6.25 6.5-6.25a7.4 7.4 0 0 1 2.7.491M16 3h3.5v6H16Zm1.75 6v3m.25 3v6m-3-3h6");
}
</style><path class="lpz56acxy"/>`,
		"fallback": "uix-sharp:interview-mic-plus",
	});
}

export default Component;
