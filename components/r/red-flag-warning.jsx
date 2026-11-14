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
		"content": `<style>.jxzfu1b8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.5h6.125A1.275 1.275 0 0 1 14 5.375l-.561 1.051a1.75 1.75 0 0 0 0 1.648L14 9.125A1.275 1.275 0 0 1 12.875 11H6.75A1.75 1.75 0 0 1 5 9.25v-4A1.75 1.75 0 0 1 6.75 3.5M5 2.5v19M20 4v10m0 4.25h.01");
}
</style><path class="jxzfu1b8h"/>`,
		"fallback": "uix:red-flag-warning",
	});
}

export default Component;
