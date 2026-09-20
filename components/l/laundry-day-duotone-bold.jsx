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
		"content": `<style>.b-lvfgzhu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 7v7h4V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ded97twic {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 7h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.pqojzri_o {
  d: path("M6 7v7h4V7");
}

.r13_5uqbr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 7v10h4V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sno-u_b6h {
  d: path("M14 7v10h4V7");
}
</style><g class="s0phu2bbs"><path class="ded97twic"/><path class="b-lvfgzhu"/><path class="r13_5uqbr"/><path class="kamdbib6v"/><path class="pqojzri_o"/><path class="sno-u_b6h"/></g>`,
		"fallback": "iconmind:laundry-day-duotone-bold",
	});
}

export default Component;
