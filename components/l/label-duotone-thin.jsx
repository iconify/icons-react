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
		"content": `<style>.bb_62lblh {
  d: path("M5.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fe9c5cduf {
  d: path("M3 7h13l5 5 -5 5H3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxa4vgbew {
  fill: currentColor;
  d: path("M3 7h13l5 5 -5 5H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tz_xhobck {
  fill: currentColor;
  d: path("M5.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="sxa4vgbew"/><path class="tz_xhobck"/><path class="fe9c5cduf"/><path class="bb_62lblh"/></g>`,
		"fallback": "iconmind:label-duotone-thin",
	});
}

export default Component;
