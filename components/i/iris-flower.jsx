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
		"content": `<style>.xv4qpqfop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c-2.5-2-2.5-6 0-8.5C14.5 5 14.5 9 12 11Zm0 0c-3.5-1-8 0-8.5 4.5c3.5.5 7-1 8.5-4.5Zm0 0c3.5-1 8 0 8.5 4.5c-3.5.5-7-1-8.5-4.5Zm0 0v10.5");
}
</style><path class="xv4qpqfop"/>`,
		"fallback": "uix-sharp:iris-flower",
	});
}

export default Component;
