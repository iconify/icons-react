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

.pcm_l3n4g {
  d: path("M5.5 3h10v4.5a5 5 0 0 1-10 0Z");
}

.s-en5xboh {
  d: path("M5.5 5H3v1.5A3.5 3.5 0 0 0 6.25 10m9.25-5H18v1.5a3.5 3.5 0 0 1-3.25 3.5m-4.25 2.5V17m2.9 3H7.5v-3h5.9m2.85 4.5V14h5.25v4.5h-5.25");
}
</style><g class="hntgybcog"><path class="pcm_l3n4g"/><path class="s-en5xboh"/></g>`,
		"fallback": "uix:trophy-chequered",
	});
}

export default Component;
