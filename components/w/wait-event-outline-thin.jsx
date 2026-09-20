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

.p8kjos25u {
  d: path("m19 6 -4.5 4.5H17L12.5 15");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}
</style><g class="hntgybcog"><path class="ppivcbbzp"/><path class="t87ohzbeq"/><path class="p8kjos25u"/></g>`,
		"fallback": "iconmind:wait-event-outline-thin",
	});
}

export default Component;
