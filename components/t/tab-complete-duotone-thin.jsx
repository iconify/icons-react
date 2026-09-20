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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.elwkggrsn {
  d: path("M22 13.5v5");
}

.h4c0sdbin {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M22 13.5v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0js09kko {
  d: path("M3 16h9");
}

.pz7pt3bwd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.5 13.5 19 16l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qouhnhnfp {
  d: path("M15 16h4");
}

.t40-rxb9c {
  d: path("M16.5 13.5 19 16l-2.5 2.5");
}

.t9_u0sbsd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yf_brbf0s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zt91q8buo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="yf_brbf0s"/><path class="t9_u0sbsd"/><path class="zt91q8buo"/><path class="pz7pt3bwd"/><path class="h4c0sdbin"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="k0js09kko"/><path class="qouhnhnfp"/><path class="t40-rxb9c"/><path class="elwkggrsn"/></g>`,
		"fallback": "iconmind:tab-complete-duotone-thin",
	});
}

export default Component;
