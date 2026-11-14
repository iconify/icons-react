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
		"content": `<style>.nvgxt10nr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5V3H3.5v18H12v-7.5M7.5 9.75h12M17 7.25l2.5 2.5l-2.5 2.5m-.5 3h1.379a1.5 1.5 0 0 1 1.06.439l1.75 1.75a1.5 1.5 0 0 1 0 2.122l-1.75 1.75a1.5 1.5 0 0 1-1.06.439H16.5a1.5 1.5 0 0 1-1.5-1.5v-3.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="nvgxt10nr"/>`,
		"fallback": "uix:promo-exit-intent",
	});
}

export default Component;
