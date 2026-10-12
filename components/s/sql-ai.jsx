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

.wsm_ynb0s {
  d: path("M3 6.25c.7 1.5 3.15 2.5 6 2.5s5.3-1 6-2.5m-12 6c.7 1.5 3.15 2.5 6 2.5m9.25.5q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.yu68wubfq {
  d: path("M2.75 5.75c0-1.75 2.8-3 6.25-3s6.25 1.25 6.25 3v12.5c0 1.75-2.8 3-6.25 3s-6.25-1.25-6.25-3Z");
}
</style><g class="hntgybcog"><path class="yu68wubfq"/><path class="wsm_ynb0s"/></g>`,
		"fallback": "iconoven:sql-ai",
	});
}

export default Component;
