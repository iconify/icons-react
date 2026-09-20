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
		"content": `<style>.atvcffgcu {
  d: path("m11.5 8 3.5 3.5");
}

.dhoelsbfc {
  d: path("M9 7.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.vc96bhbgo {
  fill: currentColor;
  d: path("M9 7.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="m8c8atiya"/><path class="vc96bhbgo"/><path class="n0n63pb2v"/><path class="dhoelsbfc"/><path class="atvcffgcu"/></g>`,
		"fallback": "iconmind:memory-retrieve-duotone-bold",
	});
}

export default Component;
