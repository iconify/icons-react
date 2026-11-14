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
		"content": `<style>.n261x8i3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5.5 15.5L8 9.75h8l2.5 5.75M12 9.75v5.75m-3.5 6l2-6h3l2 6m-5.5-9h4");
}
</style><path class="n261x8i3p"/>`,
		"fallback": "uix:skeleton-person",
	});
}

export default Component;
