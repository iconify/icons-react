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

.jff7e60oo {
  d: path("M17.75 3.75L20.5 6.5l-2.75 2.75M2.5 19q3-4.125 6 0t6 0t6 0");
}

.vqinnyyzz {
  d: path("M3.5 13.5c4.5 0 5.5-7 10.5-7h6.5");
}
</style><g class="hntgybcog"><path class="vqinnyyzz"/><path class="jff7e60oo"/></g>`,
		"fallback": "uix:ocean-current",
	});
}

export default Component;
