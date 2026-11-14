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
		"content": `<style>.ghhwv_vxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8 17c0-2 1.75-3.25 4-3.25S16 15 16 17M13.65 2.644a9.5 9.5 0 0 1 7.706 7.706m0 3.3a9.5 9.5 0 0 1-7.706 7.706m-3.3 0a9.5 9.5 0 0 1-7.706-7.706m0-3.3a9.5 9.5 0 0 1 7.706-7.706");
}
</style><path class="ghhwv_vxk"/>`,
		"fallback": "uix:reduce-motion",
	});
}

export default Component;
