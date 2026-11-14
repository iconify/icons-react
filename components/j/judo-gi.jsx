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
		"content": `<style>.ux33-tf0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 3.5l-6.5 2v5H7V21h10V10.5h4.5v-5l-6.5-2l-3 6.5ZM7 16h10");
}
</style><path class="ux33-tf0y"/>`,
		"fallback": "uix:judo-gi",
	});
}

export default Component;
