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
		"content": `<style>.z39q21b_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 8l5 5c.64.64 1 1.72 1 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2c0-1.28.36-2.36 1-3l5-5l-3-5h8zm-3 0h4");
}
</style><path class="z39q21b_j"/>`,
		"fallback": "coolicons:money-bag",
	});
}

export default Component;
