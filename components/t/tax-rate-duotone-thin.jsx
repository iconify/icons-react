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

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.kq98nmbqp {
  d: path("M8.5 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o7p-7ib_v {
  fill: currentColor;
  d: path("M8.5 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ots31sbwo {
  fill: currentColor;
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pm5zs9u8l {
  d: path("m8.5 13.5 7 -7");
}

.tsfcwwbwb {
  fill: currentColor;
  d: path("M13.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y4a8ig_7t {
  d: path("M13.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="ots31sbwo"/><path class="o7p-7ib_v"/><path class="tsfcwwbwb"/><path class="jd_dotbnq"/><path class="kq98nmbqp"/><path class="pm5zs9u8l"/><path class="y4a8ig_7t"/></g>`,
		"fallback": "iconmind:tax-rate-duotone-thin",
	});
}

export default Component;
