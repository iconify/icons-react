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
		"content": `<style>.o38zo9b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3V6C9 7.65685 7.65685 9 6 9H3M15 3V6C15 7.65685 16.34315 9 18 9H21M21 15H18C16.34315 15 15 16.34315 15 18V21M3 15H6C7.65685 15 9 16.34315 9 18V21");
}
</style><path class="o38zo9b0f"/>`,
		"fallback": "keyline-icons:minimize-fill",
	});
}

export default Component;
