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
		"content": `<style>.c6aatbbnu {
  d: path("M10 11L3 11");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4vllvb7o {
  stroke-linejoin: round;
  d: path("M14 13.5L16.1 16L20 11");
}

.pqx2-oyar {
  d: path("M10 16H3");
}

.xa_506f5h {
  d: path("M20 6L3 6");
}
</style><g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="c6aatbbnu"/><path class="pqx2-oyar"/><path class="l4vllvb7o"/></g>`,
		"fallback": "solar:list-check-minimalistic-linear",
	});
}

export default Component;
