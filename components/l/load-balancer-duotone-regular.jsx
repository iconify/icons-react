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
		"content": `<style>.dt_d4knyh {
  d: path("M8 18h13");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.hcqml3bhu {
  d: path("M8 6v12");
}

.i7lgqsbnp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldxs-ebdf {
  d: path("M8 12h13");
}

.lpowjlbtz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 12h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7hbxg08d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 6h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p2i6q-ifg {
  d: path("M8 6h13");
}

.pqgcmcahi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w1a9p9-xk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 18h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pqgcmcahi"/><path class="i7lgqsbnp"/><path class="o7hbxg08d"/><path class="lpowjlbtz"/><path class="w1a9p9-xk"/><path class="e7pgrp-wx"/><path class="hcqml3bhu"/><path class="p2i6q-ifg"/><path class="ldxs-ebdf"/><path class="dt_d4knyh"/></g>`,
		"fallback": "iconmind:load-balancer-duotone-regular",
	});
}

export default Component;
