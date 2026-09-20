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
		"content": `<style>.g7-k7ab-f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 7v10h4V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ii4t72bxj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 7h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.kzcsasbtx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 7v7h4V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pqojzri_o {
  d: path("M6 7v7h4V7");
}

.sno-u_b6h {
  d: path("M14 7v10h4V7");
}
</style><g class="hntgybcog"><path class="ii4t72bxj"/><path class="kzcsasbtx"/><path class="g7-k7ab-f"/><path class="kamdbib6v"/><path class="pqojzri_o"/><path class="sno-u_b6h"/></g>`,
		"fallback": "iconmind:laundry-day-duotone-thin",
	});
}

export default Component;
