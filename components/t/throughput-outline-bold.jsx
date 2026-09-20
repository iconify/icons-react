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

.k134iabcj {
  d: path("M3 16h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="s0phu2bbs"><path class="zuuudpbwi"/><path class="dzvfone4k"/><path class="k134iabcj"/><path class="cks97xg-s"/></g>`,
		"fallback": "iconmind:throughput-outline-bold",
	});
}

export default Component;
