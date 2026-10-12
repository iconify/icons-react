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

.mxz2w86rj {
  cx: 4.25px;
  cy: 9.5px;
  r: 1.25px;
}

.wy0v_abdz {
  cx: 7.75px;
  cy: 8.75px;
  r: 1.25px;
}

.xtnw8yhak {
  cx: 15.5px;
  cy: 8.5px;
  r: 4px;
}

.z65860edw {
  d: path("m12.12 6.88l5 5m-3.24-6.76l5 5m-7.07-.08l-8.45 8.82l1.78 1.78l8.78-8.47M5.5 9.5V3.75l3.5-1v6");
}
</style><g class="hntgybcog"><circle class="xtnw8yhak"/><path class="z65860edw"/><circle class="mxz2w86rj"/><circle class="wy0v_abdz"/></g>`,
		"fallback": "iconoven:karaoke",
	});
}

export default Component;
