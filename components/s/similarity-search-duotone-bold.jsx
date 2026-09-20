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
		"content": `<style>.aqyofsnqg {
  fill: currentColor;
  d: path("M4 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gqhblwb_c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7.5 11.5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.idnukobkm {
  d: path("m7.5 11.5 3 3");
}

.jmzox2bbn {
  d: path("m16.5 11.5 -3 3");
}

.kf5i1zqrr {
  fill: currentColor;
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oumlmtbql {
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.quv6fgbpo {
  d: path("M4 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rencte-ct {
  fill: currentColor;
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1fpd5r7j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16.5 11.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tdux9oy4s {
  d: path("M10 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="aqyofsnqg"/><path class="kf5i1zqrr"/><path class="rencte-ct"/><path class="gqhblwb_c"/><path class="s1fpd5r7j"/><path class="quv6fgbpo"/><path class="oumlmtbql"/><path class="tdux9oy4s"/><path class="idnukobkm"/><path class="jmzox2bbn"/></g>`,
		"fallback": "iconmind:similarity-search-duotone-bold",
	});
}

export default Component;
