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
		"content": `<style>.zz9abmmrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21v-4m0 0H3.5L7 9l3.5 8Zm10 4v-7m0 0h-4.5L17 5l4.5 9Z");
}
</style><path class="zz9abmmrp"/>`,
		"fallback": "uix:pine-forest",
	});
}

export default Component;
