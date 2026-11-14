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
		"content": `<style>.m-3qunbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4L15 5H9ZM9 7L4 21M15 7l5 14M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8.5 21c0-2.75 1.5-4 3.5-4s3.5 1.25 3.5 4Z");
}
</style><path class="m-3qunbij"/>`,
		"fallback": "uix-sharp:talent-review",
	});
}

export default Component;
