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
		"content": `<style>.oasf55boz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.22 11.87A2.94 2.94 0 0 1 7.81 6a4.23 4.23 0 0 1 7.85-1.02a3.31 3.31 0 0 1-.44 6.89ZM8.5 14l-.75 2.5m4.5-2.5l-.75 2.5M16 14l-.75 2.5m-12.5 3.75q2.31-2 4.63 0t4.63 0t4.63 0t4.63 0");
}
</style><path class="oasf55boz"/>`,
		"fallback": "iconoven:monsoon",
	});
}

export default Component;
