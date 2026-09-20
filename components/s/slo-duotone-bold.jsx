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
		"content": `<style>.a0f0f2w0j {
  fill: currentColor;
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.aig5gcc6s {
  d: path("m12 17 5 -5");
}

.c7te7va4j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m17 3 2 2 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jfhg8zbol {
  d: path("M3.54 13.92a9 9 0 0 1 16.92 0");
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n2zqrbdgd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3.54 13.92a9 9 0 0 1 16.92 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qpg3-gppv {
  d: path("m17 3 2 2 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xi0_gfbaj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 17 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="a0f0f2w0j"/><path class="n2zqrbdgd"/><path class="xi0_gfbaj"/><path class="c7te7va4j"/><path class="jfhg8zbol"/><path class="aig5gcc6s"/><path class="me177l4bh"/><path class="qpg3-gppv"/></g>`,
		"fallback": "iconmind:slo-duotone-bold",
	});
}

export default Component;
