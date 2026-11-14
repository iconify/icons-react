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
		"content": `<style>.yuq60fgoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7c2 0 2.5 1 4 1s2-1 4-1c2.5 0 3.5 1.75 3.5 4.25c0 2.25-1 3.5-1.5 5.25l-.75 3.75c-.25 1.5-2.25 1.5-2.5 0l-1-3c-.25-1-3.25-1-3.5 0l-1 3c-.25 1.5-2.25 1.5-2.5 0L6 16.5c-.5-1.75-1.5-3-1.5-5.25C4.5 8.75 5.5 7 8 7ZM6 2h4v2.25H6Zm2 2.25V18");
}
</style><path class="yuq60fgoy"/>`,
		"fallback": "uix-sharp:root-canal",
	});
}

export default Component;
