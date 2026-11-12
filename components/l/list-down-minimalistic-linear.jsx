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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmhvanepw {
  d: path("M20 11L3 11");
}

.pqx2-oyar {
  d: path("M10 16H3");
}

.tonplxqkt {
  stroke-linejoin: round;
  d: path("M14 15L17.5 18L21 15");
}

.xa_506f5h {
  d: path("M20 6L3 6");
}
</style><g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="nmhvanepw"/><path class="pqx2-oyar"/><path class="tonplxqkt"/></g>`,
		"fallback": "solar:list-down-minimalistic-linear",
	});
}

export default Component;
