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

.naypl0b_c {
  d: path("M3.25 3.75h2l6.5 13m-2-5.5A7 7 0 0 1 19.25 5v6.25Z");
}

.oandrw_kx {
  d: path("M10 13.75h9.25l1 3m-2.5-3L16 18");
}

.sotefpb_j {
  cx: 17px;
  cy: 19.25px;
  r: 2px;
}

.x-whtdxfp {
  cx: 9.5px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="naypl0b_c"/><path class="oandrw_kx"/><circle class="x-whtdxfp"/><circle class="sotefpb_j"/></g>`,
		"fallback": "iconoven:stroller",
	});
}

export default Component;
