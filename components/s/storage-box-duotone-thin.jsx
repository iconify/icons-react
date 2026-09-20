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
		"content": `<style>.d0swrnj3x {
  fill: currentColor;
  d: path("M3 6v4h18V6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hc491gbyo {
  d: path("M5 10v10h14V10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9ch-hj9y {
  fill: currentColor;
  d: path("M10 14h4v3h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oa34-acln {
  d: path("M3 6v4h18V6Z");
}

.x6_f3nb7s {
  d: path("M10 14h4v3h-4Z");
}
</style><g class="hntgybcog"><path class="d0swrnj3x"/><path class="j9ch-hj9y"/><path class="oa34-acln"/><path class="hc491gbyo"/><path class="x6_f3nb7s"/></g>`,
		"fallback": "iconmind:storage-box-duotone-thin",
	});
}

export default Component;
