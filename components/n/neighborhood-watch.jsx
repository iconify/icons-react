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
		"content": `<style>.edgzfpbge {
  d: path("M6.5 15C8 12.5 10 11.5 12 11.5s4 1 5.5 3.5C16 17.5 14 18.5 12 18.5s-4-1-5.5-3.5m5.5 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o1n5x74-z {
  d: path("m3.166 9.475l7.75-6.119a1.75 1.75 0 0 1 2.168 0l7.75 6.119a1.75 1.75 0 0 1 .666 1.373v8.902a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-8.902a1.75 1.75 0 0 1 .666-1.373");
}
</style><g class="hntgybcog"><path class="o1n5x74-z"/><path class="edgzfpbge"/></g>`,
		"fallback": "uix:neighborhood-watch",
	});
}

export default Component;
