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
		"content": `<style>.a6s4ost_k {
  d: path("M21 18L17.5 18M17.5 18L14 18M17.5 18L17.5 14.5M17.5 18L17.5 21.5");
}

.f8edcu39k {
  d: path("M11 16H3");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jv514ss1m {
  d: path("M21 6L3 6");
}

.r5wb7_bnz {
  d: path("M21 11L3 11");
}
</style><g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="r5wb7_bnz"/><path class="f8edcu39k"/><path class="a6s4ost_k"/></g>`,
		"fallback": "solar:list-plus-minimalistic-linear",
	});
}

export default Component;
