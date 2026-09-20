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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="nrj6p8qat"><path class="zuuudpbwi"/><path class="dzvfone4k"/><path class="k134iabcj"/><path class="cks97xg-s"/></g>`,
		"fallback": "iconmind:throughput-outline-regular",
	});
}

export default Component;
