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
		"content": `<style>.kzcphkbsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5c-2.5-2-6-2-9.5-1v13c3.5-1 7-1 9.5 1c2.5-2 6-2 9.5-1v-13c-3.5-1-7-1-9.5 1m0 0v13");
}
</style><path class="kzcphkbsx"/>`,
		"fallback": "uix:scripture-book",
	});
}

export default Component;
