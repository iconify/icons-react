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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.dvfmj91gv {
  d: path("M6 11v10h12V11");
}

.ebxhl5bne {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9.5 17.5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5r11db5v {
  fill: currentColor;
  d: path("M9 13.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jwac_0cbb {
  d: path("m9.5 17.5 5 -5");
}

.l_k_j9beu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l453zab8k {
  d: path("M9 13.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ul22pxbtp {
  fill: currentColor;
  d: path("M13 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vqk_j23jd {
  d: path("M13 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vvm7ubgvb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 11v10h12V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="i5r11db5v"/><path class="ul22pxbtp"/><path class="l_k_j9beu"/><path class="vvm7ubgvb"/><path class="ebxhl5bne"/><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="l453zab8k"/><path class="jwac_0cbb"/><path class="vqk_j23jd"/></g>`,
		"fallback": "iconmind:mortgage-duotone-thin",
	});
}

export default Component;
