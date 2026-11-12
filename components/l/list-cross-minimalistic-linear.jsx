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
		"content": `<style>.f8edcu39k {
  d: path("M11 16H3");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lydqd4-wj {
  stroke-linejoin: round;
  d: path("M15 16L17.5 13.5M17.5 13.5L20 11M17.5 13.5L20 16M17.5 13.5L15 11");
}

.u-zqtib1a {
  d: path("M11 11L3 11");
}

.xa_506f5h {
  d: path("M20 6L3 6");
}
</style><g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="u-zqtib1a"/><path class="f8edcu39k"/><path class="lydqd4-wj"/></g>`,
		"fallback": "solar:list-cross-minimalistic-linear",
	});
}

export default Component;
