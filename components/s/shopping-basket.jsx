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
		"content": `<style>.p30e06v9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10h18M4 10l2 8c.294 1.175 1.118 2 2 2h8c.882 0 1.706-.825 2-2l2-8m-10 0v10m4-10v10M5 10l4-6m10 6l-4-6");
}
</style><path class="p30e06v9j"/>`,
		"fallback": "coolicons:shopping-basket",
	});
}

export default Component;
