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
		"content": `<style>.epklwpbwu {
  width: 12px;
  height: 9.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.joijmw2ee {
  d: path("m19.45 18.45l1.8 1.8m-5-3.75h2.5m-1.25-1.25v2.5");
}

.rmger2usj {
  d: path("M8.75 13.25v3.5m-3 0h6");
}

.znr0jubqw {
  cx: 17.5px;
  cy: 16.5px;
  r: 2.75px;
}
</style><g class="hntgybcog"><rect class="epklwpbwu"/><path class="rmger2usj"/><circle class="znr0jubqw"/><path class="joijmw2ee"/></g>`,
		"fallback": "iconoven:screen-magnifier",
	});
}

export default Component;
