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
		"content": `<style>.ccvp8rb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 20.5l7.75-12c1.25-2 0-5.75-2.75-5.75S5 6.5 6.25 8.5l5.577 8.636M14.5 18l2.5 2.5l4.5-5");
}
</style><path class="ccvp8rb_q"/>`,
		"fallback": "uix:remission",
	});
}

export default Component;
