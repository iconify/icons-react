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
		"content": `<style>.a0l7g9b7f {
  d: path("M2.85 12.8a6.25 6.25 0 0 1 9.3 0");
}

.ca3deac_d {
  d: path("M13.5 9V4.75H20V9m-7.5-4.25H21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.idbgwd4-b {
  width: 9.25px;
  height: 4.75px;
  x: 12px;
  y: 9px;
  rx: 1px;
}

.scwzwtbmo {
  cx: 7.5px;
  cy: 17px;
  r: 3.75px;
}

.zxq2seyyq {
  cx: 17px;
  cy: 18.75px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="scwzwtbmo"/><path class="a0l7g9b7f"/><rect class="idbgwd4-b"/><path class="ca3deac_d"/><circle class="zxq2seyyq"/></g>`,
		"fallback": "iconoven:road-roller",
	});
}

export default Component;
