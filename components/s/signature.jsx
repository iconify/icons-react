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
		"content": `<style>.x_j650j5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17c3-3 6-7 6-10c0-2-1-3-2-3c-2 0-2 2-2 4c0 3 2 7 4 8c1 .5 2 0 3-2l1-2c0 2 1 4 3 4c1 0 2-2 3-2s1 1 2 2M3 21h18");
}
</style><path class="x_j650j5r"/>`,
		"fallback": "coolicons:signature",
	});
}

export default Component;
