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

.qehun0bnj {
  d: path("M7 14v6.5h7.5L17 18v-4");
}

.yc-lwpb-a {
  d: path("M7 8V3.5h10V8M6.5 8h11a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 13.5v-2A3.5 3.5 0 0 1 6.5 8");
}
</style><g class="hntgybcog"><path class="yc-lwpb-a"/><path class="qehun0bnj"/></g>`,
		"fallback": "uix:lab-label-printer",
	});
}

export default Component;
