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
		"content": `<style>.c9qt-yqyi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 20h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g3lrzsbos {
  d: path("M3 5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8_krc19t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m_5u0ccez {
  d: path("M15 20h7");
}

.n3a0pmdyc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 15h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q83h1dbic {
  d: path("M11 15h7");
}

.r_a6g_bgv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 10h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="hntgybcog"><path class="j8_krc19t"/><path class="r_a6g_bgv"/><path class="n3a0pmdyc"/><path class="c9qt-yqyi"/><path class="g3lrzsbos"/><path class="uepsd3bvn"/><path class="q83h1dbic"/><path class="m_5u0ccez"/></g>`,
		"fallback": "iconmind:reasoning-trace-duotone-thin",
	});
}

export default Component;
