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
		"content": `<style>.buphzhbcx {
  d: path("m15 9 2 -2");
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9jx3nbss {
  d: path("M9 9 7 7");
}

.ivnzz4jio {
  d: path("M12 8V5");
}

.ms-nem7qp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pdwch7bxf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 9 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pyq_xcb9j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 11v9h14v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sv8lhpyik {
  d: path("M5 11v9h14v-9");
}

.u7n9khzwg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 9 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="pyq_xcb9j"/><path class="yf_brbf0s"/><path class="ms-nem7qp"/><path class="u7n9khzwg"/><path class="pdwch7bxf"/><path class="sv8lhpyik"/><path class="d8abqfbpc"/><path class="ivnzz4jio"/><path class="i9jx3nbss"/><path class="buphzhbcx"/></g>`,
		"fallback": "iconmind:loot-box-duotone-thin",
	});
}

export default Component;
