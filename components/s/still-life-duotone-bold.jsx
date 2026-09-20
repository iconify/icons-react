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
		"content": `<style>.bq3r_miaz {
  d: path("M3 20v-7c0 -2 2.5 -3 2.5 -5V4h4v4c0 2 2.5 3 2.5 5v7Z");
}

.f1etaqbet {
  d: path("M15 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.svz1b3b2j {
  fill: currentColor;
  d: path("M15 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w59janbjh {
  fill: currentColor;
  d: path("M3 20v-7c0 -2 2.5 -3 2.5 -5V4h4v4c0 2 2.5 3 2.5 5v7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="w59janbjh"/><path class="svz1b3b2j"/><path class="bq3r_miaz"/><path class="f1etaqbet"/></g>`,
		"fallback": "iconmind:still-life-duotone-bold",
	});
}

export default Component;
