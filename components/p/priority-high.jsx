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
		"content": `<style>.bh2g22btx {
  d: path("M5.25 9.5L12 2.75l6.75 6.75");
}

.ha8apkuln {
  d: path("M5.25 14.75L12 8l6.75 6.75M5.25 20L12 13.25L18.75 20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bh2g22btx"/><path class="ha8apkuln"/></g>`,
		"fallback": "iconoven:priority-high",
	});
}

export default Component;
