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
		"content": `<style>.egww2zkkf {
  d: path("M3 18v-5h4");
}

.h0dy-livp {
  d: path("M7 21v-9l3 -3h4l3 3v9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m09gg_-dd {
  d: path("M8.5 7a3.5 3.5 0 0 1 7 0");
}

.yf1dd0_tg {
  d: path("M21 18v-5h-4");
}
</style><g class="hntgybcog"><path class="m09gg_-dd"/><path class="h0dy-livp"/><path class="egww2zkkf"/><path class="yf1dd0_tg"/></g>`,
		"fallback": "iconmind:raincoat-outline-thin",
	});
}

export default Component;
