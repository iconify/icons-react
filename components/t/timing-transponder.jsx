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
		"content": `<style>.ei3vzib2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.5h5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 12A3.5 3.5 0 0 1 7 8.5m11-1a6.5 6.5 0 0 1 0 9M7 12h.01");
}
</style><path class="ei3vzib2k"/>`,
		"fallback": "uix:timing-transponder",
	});
}

export default Component;
