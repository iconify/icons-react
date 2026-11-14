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
		"content": `<style>.l-oa8wbtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M6.009 9.281l1.77 1.609a1.5 1.5 0 0 1 0 2.22l-1.77 1.609a1.5 1.5 0 0 1-2.509-1.11v-3.218a1.5 1.5 0 0 1 2.509-1.11m11.982 0l-1.77 1.609a1.5 1.5 0 0 0 0 2.22l1.77 1.609a1.5 1.5 0 0 0 2.509-1.11v-3.218a1.5 1.5 0 0 0-2.509-1.11");
}
</style><path class="l-oa8wbtu"/>`,
		"fallback": "uix:line-symmetry",
	});
}

export default Component;
