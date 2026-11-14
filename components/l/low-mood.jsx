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

.q-0-yyb5z {
  d: path("M8.5 16.5c1.5-2 5.5-2 7 0");
}

.yve3s6bcw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 10h.01M15 10h.01");
}
</style><g class="hntgybcog"><path class="yve3s6bcw"/><path class="q-0-yyb5z"/></g>`,
		"fallback": "uix:low-mood",
	});
}

export default Component;
