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
		"content": `<style>.t7494bcbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9H14a1.5 1.5 0 0 0 3 0h1.5a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5H4.25a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 4.25 9M6 13.5L4 21m12.75-7.5l2 7.5M5.07 17h12.62");
}
</style><path class="t7494bcbg"/>`,
		"fallback": "iconoven:massage-table",
	});
}

export default Component;
