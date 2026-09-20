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
		"content": `<style>.gbxzirw0u {
  d: path("M21 19 11 9");
}

.ibuanu9pl {
  fill: currentColor;
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lzdsnnb7v {
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m91y9qbhe {
  d: path("M3 19 13 9");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.nf1bw6o1k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 19 11 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.trirghiqk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 8h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u402o9-bj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19 13 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xaz90clio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="ibuanu9pl"/><path class="trirghiqk"/><path class="u402o9-bj"/><path class="nf1bw6o1k"/><path class="xaz90clio"/><path class="mqtixbwqo"/><path class="lzdsnnb7v"/><path class="m91y9qbhe"/><path class="gbxzirw0u"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:perspective-drawing-duotone-bold",
	});
}

export default Component;
