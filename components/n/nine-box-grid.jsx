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
		"content": `<style>.a_q6nbczn {
  d: path("M19.25 3.75za1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xly-6-fjm {
  d: path("M4.25 2.5h1A1.75 1.75 0 0 1 7 4.25v1A1.75 1.75 0 0 1 5.25 7h-1A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12.5 7h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 11.5 2.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7h-1A1.75 1.75 0 0 1 17 5.25v-1a1.75 1.75 0 0 1 1.75-1.75M4.25 9.75h1A1.75 1.75 0 0 1 7 11.5v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 2.5 12.5v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 12.5v-1a1.75 1.75 0 0 1 1.75-1.75M4.25 17h1A1.75 1.75 0 0 1 7 18.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 17m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 11.5 17m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-1A1.75 1.75 0 0 1 18.75 17");
}
</style><g class="hntgybcog"><path class="xly-6-fjm"/><path class="a_q6nbczn"/></g>`,
		"fallback": "uix:nine-box-grid",
	});
}

export default Component;
