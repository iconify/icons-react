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
		"content": `<style>.cks97xg-s {
  d: path("m14 13 3 3 -3 3");
}

.dzvfone4k {
  d: path("m14 5 3 3 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k134iabcj {
  d: path("M3 16h14");
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="hntgybcog"><path class="zuuudpbwi"/><path class="dzvfone4k"/><path class="k134iabcj"/><path class="cks97xg-s"/></g>`,
		"fallback": "iconmind:throughput-outline-thin",
	});
}

export default Component;
