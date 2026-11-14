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
		"content": `<style>.h-r4b5biv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm14.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-10.5 12c0-5 2.5-8 5.5-8s5.5 3 5.5 8m-15 0V18c0-1.5 1-3 2.25-3m16.75 6.5V18c0-1.5-1-3-2.25-3");
}
</style><path class="h-r4b5biv"/>`,
		"fallback": "uix-sharp:scrum",
	});
}

export default Component;
