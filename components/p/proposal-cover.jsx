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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khtiqsqaa {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M9.25 11.25h5.5A1.75 1.75 0 0 1 16.5 13v.25A1.75 1.75 0 0 1 14.75 15h-5.5a1.75 1.75 0 0 1-1.75-1.75V13a1.75 1.75 0 0 1 1.75-1.75M7.5 18h5");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="khtiqsqaa"/></g>`,
		"fallback": "uix:proposal-cover",
	});
}

export default Component;
