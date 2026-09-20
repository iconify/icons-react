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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dhondqbyc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.irm-6r_xs {
  d: path("M3 17v4");
}

.jw01oqbhb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6.36 9.95a6 6 0 0 1 11.28 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.piohzog1p {
  d: path("M3 19h9");
}

.rp243mbkd {
  d: path("M6.36 9.95a6 6 0 0 1 11.28 0");
}

.scq6fxlrr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sx1m0u7ew {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="dktry7bqc"/><path class="jw01oqbhb"/><path class="dhondqbyc"/><path class="scq6fxlrr"/><path class="sx1m0u7ew"/><path class="rp243mbkd"/><path class="bo51iypxr"/><path class="piohzog1p"/><path class="irm-6r_xs"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:visibility-low-duotone-thin",
	});
}

export default Component;
