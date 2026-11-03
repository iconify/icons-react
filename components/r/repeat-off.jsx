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
		"content": `<style>.zb2daqbzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12L3 9C3 7.3432 4.3431 6 6 6M18 18L3 18M6 21L3 18L6 15M11.6569 6L21 6M18 3L21 6L18 9M21 12L21 15C21 15.11 20.9941 15.2187 20.9825 15.3257M2 2L22 22");
}
</style><path class="zb2daqbzf"/>`,
		"fallback": "keyline-icons:repeat-off",
	});
}

export default Component;
