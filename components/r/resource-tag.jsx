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

.ocvz2hb8u {
  d: path("M15.25 10.25C15 9.5 14.4 9 13.5 9c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1m1.75-6.25V9m0 6v1.25");
}

.xny-6dbig {
  d: path("M2.5 12L9 4.5h10A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H9ZM7 12h.01");
}
</style><g class="hntgybcog"><path class="xny-6dbig"/><path class="ocvz2hb8u"/></g>`,
		"fallback": "uix:resource-tag",
	});
}

export default Component;
