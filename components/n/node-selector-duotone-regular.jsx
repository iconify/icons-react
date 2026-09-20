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
		"content": `<style>.bnyh7_0ma {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 5 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j93aodlin {
  fill: currentColor;
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l2x-_sd5q {
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.snqsppb6q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 17h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w8vefpfbs {
  d: path("m10 5 2 2 2 -2");
}
</style><g class="nrj6p8qat"><path class="j93aodlin"/><path class="dktry7bqc"/><path class="rxwr8htky"/><path class="snqsppb6q"/><path class="bnyh7_0ma"/><path class="pmuiqo95v"/><path class="l2x-_sd5q"/><path class="bo51iypxr"/><path class="l3ca9u8kt"/><path class="w8vefpfbs"/></g>`,
		"fallback": "iconmind:node-selector-duotone-regular",
	});
}

export default Component;
