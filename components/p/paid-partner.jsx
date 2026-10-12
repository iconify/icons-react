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
		"content": `<style>.f4x3joxaq {
  cx: 18px;
  cy: 17.25px;
  r: 3.25px;
}

.grpe3ebbt {
  d: path("M18 15.75v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sbues1b-t {
  d: path("M4.5 20.25H12a.75.75 0 0 0 .75-.75c0-3-2.1-5-4.5-5s-4.5 2-4.5 5a.75.75 0 0 0 .75.75M14 3.75a3.25 3.25 0 0 1 0 6.5");
}

.zit0atbsk {
  cx: 8.25px;
  cy: 9px;
  r: 3px;
}
</style><g class="hntgybcog"><circle class="zit0atbsk"/><path class="sbues1b-t"/><circle class="f4x3joxaq"/><path class="grpe3ebbt"/></g>`,
		"fallback": "iconoven:paid-partner",
	});
}

export default Component;
