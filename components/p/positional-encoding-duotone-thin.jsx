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
		"content": `<style>.aam38ubkv {
  d: path("M14 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i9a2h1bww {
  fill: currentColor;
  d: path("M6 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m2beobmou {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 16 4 -4 4 4 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tip34zbqw {
  d: path("M6 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y171prxam {
  fill: currentColor;
  d: path("M14 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ynq2074_v {
  d: path("m3 16 4 -4 4 4 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="i9a2h1bww"/><path class="y171prxam"/><path class="m2beobmou"/><path class="ynq2074_v"/><path class="tip34zbqw"/><path class="aam38ubkv"/></g>`,
		"fallback": "iconmind:positional-encoding-duotone-thin",
	});
}

export default Component;
