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
		"content": `<style>.a7-6__szj {
  d: path("M8.38 11.33a5 5 0 1 0 5.79 4.05");
}

.ard1fccgb {
  d: path("M10.5 8.5v4.75h5.25l2 5.25h2.5m-9.75-8.25h4");
}

.c20mdzq7v {
  cx: 11px;
  cy: 4.5px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hp1pbxxdu {
  width: 3px;
  height: 2.5px;
  x: 18px;
  y: 9px;
  rx: 0.75px;
}

.xx2-g5bfx {
  d: path("M19.5 9V7");
}
</style><g class="hntgybcog"><circle class="c20mdzq7v"/><path class="ard1fccgb"/><path class="a7-6__szj"/><rect class="hp1pbxxdu"/><path class="xx2-g5bfx"/></g>`,
		"fallback": "iconoven:power-wheelchair",
	});
}

export default Component;
