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
		"content": `<style>.fqostxb6q {
  d: path("M10 12.25a2 2 0 1 1 3.5 1.5l-1.5 1v.5m0 3.25h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tqpssobwz {
  d: path("M4.75 3h14.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 5.25A2.25 2.25 0 0 1 4.75 3m1.875 4.5h10.75A2.625 2.625 0 0 1 20 10.125v8.75a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 18.875v-8.75A2.625 2.625 0 0 1 6.625 7.5");
}
</style><g class="hntgybcog"><path class="tqpssobwz"/><path class="fqostxb6q"/></g>`,
		"fallback": "uix:status-lost",
	});
}

export default Component;
