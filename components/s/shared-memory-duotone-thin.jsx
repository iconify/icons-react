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
		"content": `<style>.ayvbjgbud {
  d: path("M10.5 8h3");
}

.bf4bqzbvb {
  fill: currentColor;
  d: path("M6.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.ij7rtuuan {
  d: path("M13.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.p3mjlkbpz {
  d: path("M6.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tart4iz-n {
  fill: currentColor;
  d: path("M13.5 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="m8c8atiya"/><path class="bf4bqzbvb"/><path class="tart4iz-n"/><path class="n0n63pb2v"/><path class="p3mjlkbpz"/><path class="ij7rtuuan"/><path class="ayvbjgbud"/></g>`,
		"fallback": "iconmind:shared-memory-duotone-thin",
	});
}

export default Component;
