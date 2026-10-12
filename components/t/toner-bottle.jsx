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
		"content": `<style>.e1u04fbdj {
  d: path("M6.25 13.5q1.875-1.125 3.75 0c1.875 1.125 2.5.75 3.75 0m4.75-3.75c1.5 2 2.5 3.25 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.25 1-2.5 2.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jzga9sj2r {
  width: 4.5px;
  height: 3px;
  x: 7.75px;
  y: 3px;
  rx: 1px;
}

.msugcbb6m {
  d: path("M12.25 4h1.5");
}

.q7kugbbgr {
  width: 7.5px;
  height: 12.25px;
  x: 6.25px;
  y: 9px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="jzga9sj2r"/><path class="msugcbb6m"/><rect class="q7kugbbgr"/><path class="e1u04fbdj"/></g>`,
		"fallback": "iconoven:toner-bottle",
	});
}

export default Component;
