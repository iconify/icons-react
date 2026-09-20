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
		"content": `<style>.e9t464boz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 12v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h7vr07ufd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.kf5i1zqrr {
  fill: currentColor;
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l7r9aieyp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oumlmtbql {
  d: path("M16 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.xa3jgydgh {
  d: path("M3 12h9");
}

.xaz90clio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zn_a46_dj {
  d: path("M18 12v3");
}
</style><g class="s0phu2bbs"><path class="kf5i1zqrr"/><path class="h7vr07ufd"/><path class="l7r9aieyp"/><path class="e9t464boz"/><path class="xaz90clio"/><path class="k6nj2fbya"/><path class="xa3jgydgh"/><path class="oumlmtbql"/><path class="zn_a46_dj"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:pin-item-duotone-bold",
	});
}

export default Component;
