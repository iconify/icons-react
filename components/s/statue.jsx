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
		"content": `<style>.awkysdbnt {
  d: path("M8.57 16.25L9.18 10q.07-.75.82-.75h2q.75 0 .82.75l.61 6.25q.07.75-.68.75h-3.5q-.75 0-.68-.75M13 9.75l3.25-2.25M17 2.75c1 1 1.5 1.75 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.75.5-1.5 1.5-2.5M7.5 17h7q.5 0 .5.5v1q0 .5.5.5h.5q.5 0 .5.5v1.25q0 .5-.5.5H6q-.5 0-.5-.5V19.5q0-.5.5-.5h.5q.5 0 .5-.5v-1q0-.5.5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lo-_gibgr {
  cx: 11px;
  cy: 5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="lo-_gibgr"/><path class="awkysdbnt"/></g>`,
		"fallback": "iconoven:statue",
	});
}

export default Component;
