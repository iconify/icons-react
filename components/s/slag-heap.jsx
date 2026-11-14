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
		"content": `<style>.s8p6pmbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 20c1-4 3-7 5.5-7.5C8.5 9 10 7 12.5 7s4 2.5 4.5 5c2.5 1 4 4 5 8Zm10-8.5h.01m2.49 4h.01M9.5 16h.01M7 17.5h.01");
}
</style><path class="s8p6pmbba"/>`,
		"fallback": "uix:slag-heap",
	});
}

export default Component;
