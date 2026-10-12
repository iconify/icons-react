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
		"content": `<style>.m80u4obii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 3.75H7a2 2 0 0 0-2 2V9.5c0 1.25-.75 2.5-2.25 2.5C4.25 12 5 13.25 5 14.5v3.75a2 2 0 0 0 2 2h.75m8.5-16.5H17a2 2 0 0 1 2 2V9.5c0 1.25.75 2.5 2.25 2.5c-1.5 0-2.25 1.25-2.25 2.5v3.75a2 2 0 0 1-2 2h-.75m-7.5-8L11 14.5l4.25-4.5");
}
</style><path class="m80u4obii"/>`,
		"fallback": "iconoven:unit-test",
	});
}

export default Component;
