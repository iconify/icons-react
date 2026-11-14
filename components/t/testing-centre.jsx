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
		"content": `<style>.yl5_r8bgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5v15a3.5 3.5 0 0 0 7 0v-15M7 2.5h10M8.5 12h7");
}
</style><path class="yl5_r8bgf"/>`,
		"fallback": "uix:testing-centre",
	});
}

export default Component;
