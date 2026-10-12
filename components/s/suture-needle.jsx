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
		"content": `<style>.kt93o2wwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.61 9.94a8 8 0 0 1 14.78 0m0 0c1 3.5-.5 8.81-4.64 8.81c-2 0-2.5-2-1-2.5s2.25 1.5.75 3.25c-1.25 1.25-3.5 1.75-7 1.75");
}
</style><path class="kt93o2wwk"/>`,
		"fallback": "iconoven:suture-needle",
	});
}

export default Component;
