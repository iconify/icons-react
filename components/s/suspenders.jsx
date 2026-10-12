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
		"content": `<style>.gkiwkxb2b {
  d: path("M4 21.25V18.5h16v2.75");
}

.gnpyp3bno {
  width: 3px;
  height: 3.5px;
  x: 14px;
  y: 15px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3cde52cn {
  width: 3px;
  height: 3.5px;
  x: 7px;
  y: 15px;
  rx: 0.75px;
}

.x-udisbis {
  d: path("M8.5 2.75V15m7-12.25V15");
}
</style><g class="hntgybcog"><path class="x-udisbis"/><rect class="s3cde52cn"/><rect class="gnpyp3bno"/><path class="gkiwkxb2b"/></g>`,
		"fallback": "iconoven:suspenders",
	});
}

export default Component;
