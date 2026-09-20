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
		"content": `<style>.a8cyhwbdj {
  d: path("M16 2v3");
}

.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.q7kpryb3v {
  d: path("M8 2v3");
}

.sv5la6biz {
  fill: currentColor;
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.taxmbub4q {
  d: path("M6 17h12");
}

.v5p1x2blv {
  d: path("M6 13h8");
}
</style><g class="hntgybcog"><path class="sv5la6biz"/><path class="cu26jmb_i"/><path class="j835zw5-z"/><path class="q7kpryb3v"/><path class="a8cyhwbdj"/><path class="v5p1x2blv"/><path class="taxmbub4q"/></g>`,
		"fallback": "iconmind:study-plan-duotone-thin",
	});
}

export default Component;
