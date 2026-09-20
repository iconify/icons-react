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
		"content": `<style>.cas9rrwus {
  d: path("m10 5 4 4 -4 4Z");
}

.i1w1bzg9b {
  fill: currentColor;
  d: path("m10 5 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="m8c8atiya"/><path class="i1w1bzg9b"/><path class="n0n63pb2v"/><path class="cas9rrwus"/></g>`,
		"fallback": "iconmind:sandbox-api-duotone-bold",
	});
}

export default Component;
