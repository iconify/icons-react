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
		"content": `<style>.ak_t1bcfw {
  d: path("M14 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.d7j29trjs {
  d: path("M6 4h12v16H6Z");
}

.e04igbcxt {
  fill: currentColor;
  d: path("M9 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f8gsx7b5s {
  d: path("M6 8h12");
}

.g6iop94az {
  fill: currentColor;
  d: path("M6 4h12v16H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-3tqnbzb {
  d: path("M9 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uvugsybla {
  fill: currentColor;
  d: path("M14 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="g6iop94az"/><path class="e04igbcxt"/><path class="uvugsybla"/><path class="d7j29trjs"/><path class="f8gsx7b5s"/><path class="p-3tqnbzb"/><path class="ak_t1bcfw"/></g>`,
		"fallback": "iconmind:seed-packet-duotone-thin",
	});
}

export default Component;
