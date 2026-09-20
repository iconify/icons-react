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

.hjhixynnt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 19 2 -2 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kp1e7wcsa {
  d: path("m9 19 2 -2 2 2 2 -2");
}

.l_k_j9beu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvm7ubgvb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 11v10h12V11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="l_k_j9beu"/><path class="vvm7ubgvb"/><path class="hjhixynnt"/><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="kp1e7wcsa"/></g>`,
		"fallback": "iconmind:property-invest-duotone-thin",
	});
}

export default Component;
