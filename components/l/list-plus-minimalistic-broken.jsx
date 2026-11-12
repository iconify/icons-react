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

.cvhlscc2a {
  d: path("M21 11L9.88235 11M5.38235 11H3");
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

.spodu6bqp {
  d: path("M3 6L14.1176 6M18.6176 6H21");
}
</style><g class="ipq1z-bjh"><path class="f8edcu39k"/><path class="a6s4ost_k"/><path class="spodu6bqp"/><path class="cvhlscc2a"/></g>`,
		"fallback": "solar:list-plus-minimalistic-broken",
	});
}

export default Component;
