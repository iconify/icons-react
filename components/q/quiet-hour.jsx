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
		"content": `<style>.m8d-ztzea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.85 19.204L6.5 15h-4V9h4l7-5.5v10.098M6.5 9v6m9.75-7.763a5.5 5.5 0 0 1 2.666 3.808M19.5 14.5a3.75 3.75 0 1 0 2.25 5a3 3 0 0 1-2.25-5Z");
}
</style><path class="m8d-ztzea"/>`,
		"fallback": "uix-sharp:quiet-hour",
	});
}

export default Component;
