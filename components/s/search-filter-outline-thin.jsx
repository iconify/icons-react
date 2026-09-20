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

.mktkir7xv {
  d: path("m5 13 -2 2");
}

.r441scx-k {
  d: path("M4 10a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.wlknapbcp {
  d: path("M15 8h7l-2 2v8h-3v-8Z");
}
</style><g class="hntgybcog"><path class="r441scx-k"/><path class="mktkir7xv"/><path class="wlknapbcp"/></g>`,
		"fallback": "iconmind:search-filter-outline-thin",
	});
}

export default Component;
