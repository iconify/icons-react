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
		"content": `<style>.h2_i9ab2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5V3h7.5v3.5l4 3.5h-8l4-3.5M12 10v9h7v-9M5.5 21.5h5");
}
</style><path class="h2_i9ab2e"/>`,
		"fallback": "uix:lantern-pole",
	});
}

export default Component;
