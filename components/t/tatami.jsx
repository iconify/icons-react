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
		"content": `<style>.tc1qlowmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5h14.5l-4.5 8H2.5Zm-4.5 8V18H17l4.5-8V6.5m-16.75 4h14.5");
}
</style><path class="tc1qlowmd"/>`,
		"fallback": "uix:tatami",
	});
}

export default Component;
