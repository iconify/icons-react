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
		"content": `<style>.erk0ycb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v18M3 7h18M4.5 7V3.5m15 3.5V3.5M7.5 7l4.5 4.5L16.5 7");
}
</style><path class="erk0ycb0j"/>`,
		"fallback": "uix:pole-crossarm",
	});
}

export default Component;
