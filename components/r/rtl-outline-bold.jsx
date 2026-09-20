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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.h-tbmj14o {
  d: path("M6 17h15");
}

.ltkkdtbvf {
  d: path("M8.5 14.5 6 17l2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="s0phu2bbs"><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="h-tbmj14o"/><path class="ltkkdtbvf"/></g>`,
		"fallback": "iconmind:rtl-outline-bold",
	});
}

export default Component;
