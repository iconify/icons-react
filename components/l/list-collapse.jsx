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
		"content": `<style>.km3qf_avl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 5.5h9.5m-9.5 6.5h9.5m-9.5 6.5h9.5M3.75 5.25L6 7.5l2.25-2.25m-4.5 13.5L6 16.5l2.25 2.25");
}
</style><path class="km3qf_avl"/>`,
		"fallback": "iconoven:list-collapse",
	});
}

export default Component;
