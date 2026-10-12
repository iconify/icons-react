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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5xi857vv {
  cx: 12px;
  cy: 9.25px;
  r: 1.75px;
}

.qncdtxbxy {
  d: path("M9 16.5h6a.75.75 0 0 0 .75-.75c0-1.1-1.68-1.75-3.75-1.75s-3.75.65-3.75 1.75a.75.75 0 0 0 .75.75");
}

.ufig3ytqf {
  d: path("M12 2.75V4.5m0 16.75V19.5M2.75 12H4.5m16.75 0H19.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="ufig3ytqf"/><circle class="m5xi857vv"/><path class="qncdtxbxy"/></g>`,
		"fallback": "iconoven:target-audience",
	});
}

export default Component;
