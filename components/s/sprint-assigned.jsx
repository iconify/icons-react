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
		"content": `<style>.v22re9wth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5L2.5 13H9l-2 8.5L14.5 10H9Zm3.5 18.75c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5c0 .25-.25.5-.5.5h-6c-.25 0-.5-.25-.5-.5Zm1.75-6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="v22re9wth"/>`,
		"fallback": "uix-sharp:sprint-assigned",
	});
}

export default Component;
