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
		"content": `<style>.hf_gtezns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jo12c8bss {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 14a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k7ywiznno {
  d: path("M4 14a8 8 0 0 1 16 0");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="jo12c8bss"/><path class="hf_gtezns"/><path class="k7ywiznno"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:probability-curve-duotone-thin",
	});
}

export default Component;
