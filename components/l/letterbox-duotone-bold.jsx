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
		"content": `<style>.itq_ntb3g {
  d: path("M11 16v5");
}

.nk1mt_brr {
  fill: currentColor;
  d: path("M5 16v-6a6 6 0 0 1 12 0v6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ra07l749q {
  d: path("M5 16v-6a6 6 0 0 1 12 0v6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zawirs49s {
  d: path("M8 11h6");
}
</style><g class="s0phu2bbs"><path class="nk1mt_brr"/><path class="ra07l749q"/><path class="zawirs49s"/><path class="itq_ntb3g"/></g>`,
		"fallback": "iconmind:letterbox-duotone-bold",
	});
}

export default Component;
