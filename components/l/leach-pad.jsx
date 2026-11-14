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
		"content": `<style>.m5vlm2yhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M6.085 17.829l2.5-5A1.5 1.5 0 0 1 9.927 12h4.146a1.5 1.5 0 0 1 1.342.829l2.5 5A1.5 1.5 0 0 1 16.573 20H7.427a1.5 1.5 0 0 1-1.342-2.171M6.25 3.5c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5m5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5m5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5");
}
</style><path class="m5vlm2yhf"/>`,
		"fallback": "uix:leach-pad",
	});
}

export default Component;
