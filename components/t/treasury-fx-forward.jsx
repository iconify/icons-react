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
		"content": `<style>.pahbl4aga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5h14M14.5 4L18 7.5L14.5 11m-2.3 5.5H6M9.5 13L6 16.5L9.5 20m5.5-4.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="pahbl4aga"/>`,
		"fallback": "uix-sharp:treasury-fx-forward",
	});
}

export default Component;
