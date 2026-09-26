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
		"content": `<style>.w5b453brv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V9C3 7.34315 4.34315 6 6 6H21M18 3L21 6L18 9M21 12V15C21 16.65685 19.65685 18 18 18H3M6 21L3 18L6 15");
}
</style><path class="w5b453brv"/>`,
		"fallback": "keyline-icons:repeat",
	});
}

export default Component;
