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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.pqojzri_o {
  d: path("M6 7v7h4V7");
}

.sno-u_b6h {
  d: path("M14 7v10h4V7");
}
</style><g class="hntgybcog"><path class="kamdbib6v"/><path class="pqojzri_o"/><path class="sno-u_b6h"/></g>`,
		"fallback": "iconmind:laundry-day-outline-thin",
	});
}

export default Component;
