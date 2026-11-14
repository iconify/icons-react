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
		"content": `<style>.re_gvcqys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6C4.5 4 7 4 9 6s4.5 2 6.5 0s4.5-2 6-.5M2.5 12c2-2 4.5-2 6.5 0s4.5 2 6.5 0s4.5-2 6-.5M3 21.5c.5-4 6-4 6.5 0m2.5 0c.5-3.5 6-4.5 9 0");
}
</style><path class="re_gvcqys"/>`,
		"fallback": "uix:rapids",
	});
}

export default Component;
