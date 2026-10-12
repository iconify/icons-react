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

.lbbj3sidx {
  cx: 4.75px;
  cy: 17.5px;
  r: 2px;
}

.w09f2snjy {
  cx: 14.5px;
  cy: 5.75px;
  r: 3px;
}

.wo1wvr-nr {
  width: 7px;
  height: 7.5px;
  x: 11px;
  y: 11.25px;
  rx: 2px;
}

.x9u7m09lp {
  d: path("m18 13l2.5 2M11 13l-2-1.75m2 5.25c-1.5 0-2.5 1-4.25 1");
}
</style><g class="hntgybcog"><circle class="w09f2snjy"/><rect class="wo1wvr-nr"/><path class="x9u7m09lp"/><circle class="lbbj3sidx"/></g>`,
		"fallback": "iconoven:space-walk",
	});
}

export default Component;
