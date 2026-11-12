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
		"content": `<style>.cvhlscc2a {
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

.y_nlv-nqo {
  d: path("M21 18H14");
}
</style><g class="ipq1z-bjh"><path class="f8edcu39k"/><path class="spodu6bqp"/><path class="cvhlscc2a"/><path class="y_nlv-nqo"/></g>`,
		"fallback": "solar:list-minus-minimalistic-broken",
	});
}

export default Component;
