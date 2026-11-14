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
		"content": `<style>.qizgjp2dg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5h19M7 17.5a5 5 0 0 1 10 0m-5-7.75v-3.5M6.5 12L4 9.5M17.5 12L20 9.5");
}
</style><path class="qizgjp2dg"/>`,
		"fallback": "uix:mood-hopeful",
	});
}

export default Component;
