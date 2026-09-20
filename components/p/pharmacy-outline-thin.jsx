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

.o77mms0ex {
  d: path("M3 11h18a9 9 0 0 1 -18 0");
}

.vr9ht74fa {
  d: path("m8 3 7 7");
}
</style><g class="hntgybcog"><path class="o77mms0ex"/><path class="vr9ht74fa"/></g>`,
		"fallback": "iconmind:pharmacy-outline-thin",
	});
}

export default Component;
