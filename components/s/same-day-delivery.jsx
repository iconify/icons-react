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
		"content": `<style>.dpvierh-z {
  d: path("M17.25 3.25v.25m0 7.25v-.25M21 7h-.25M13.5 7h.25m6.15-2.65l-.18.18M14.6 9.65l.18-.18m5.12.18l-.18-.18M14.6 4.35l.18.18");
}

.e-xgvqbqt {
  d: path("M8.5 10.75v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.joko_go6x {
  cx: 17.25px;
  cy: 7px;
  r: 2px;
}

.ycaxg0gom {
  width: 11.5px;
  height: 10.5px;
  x: 2.75px;
  y: 10.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="ycaxg0gom"/><path class="e-xgvqbqt"/><circle class="joko_go6x"/><path class="dpvierh-z"/></g>`,
		"fallback": "iconoven:same-day-delivery",
	});
}

export default Component;
