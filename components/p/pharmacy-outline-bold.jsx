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
		"content": `<style>.o77mms0ex {
  d: path("M3 11h18a9 9 0 0 1 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vr9ht74fa {
  d: path("m8 3 7 7");
}
</style><g class="s0phu2bbs"><path class="o77mms0ex"/><path class="vr9ht74fa"/></g>`,
		"fallback": "iconmind:pharmacy-outline-bold",
	});
}

export default Component;
