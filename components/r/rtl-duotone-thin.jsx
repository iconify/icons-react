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

.h-tbmj14o {
  d: path("M6 17h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfjunqbhb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 17h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ltkkdtbvf {
  d: path("M8.5 14.5 6 17l2.5 2.5");
}

.v_dr6_elj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.5 14.5 6 17l2.5 2.5");
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
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="yf_brbf0s"/><path class="lfjunqbhb"/><path class="v_dr6_elj"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="h-tbmj14o"/><path class="ltkkdtbvf"/></g>`,
		"fallback": "iconmind:rtl-duotone-thin",
	});
}

export default Component;
