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

.j7_v18gsv {
  d: path("M14 6a6 6 0 1 0 0 12 5 5 0 0 1 0 -12");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.xwfqud8-i {
  fill: currentColor;
  d: path("M14 6a6 6 0 1 0 0 12 5 5 0 0 1 0 -12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="zhy5nnbig"/><path class="xwfqud8-i"/><path class="o_ssmh9ez"/><path class="j7_v18gsv"/></g>`,
		"fallback": "iconmind:jet-lag-duotone-thin",
	});
}

export default Component;
