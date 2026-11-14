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
		"content": `<style>.yhh47gb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM2.5 21c0-4 2.5-6 6-6s6 2 6 6m1-17h5a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H17l-2.5 2V5a1 1 0 0 1 1-1Z");
}
</style><path class="yhh47gb9t"/>`,
		"fallback": "uix-sharp:staff-assisting",
	});
}

export default Component;
