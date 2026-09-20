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
		"content": `<style>.e0ead5bmw {
  d: path("M3 12h3");
}

.jxwl6acrk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16.32 7a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m9suxjxea {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pf-zwj5ei {
  d: path("m6 10 2 2 -2 2");
}

.rycut8jxl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v-m1aobza {
  d: path("M16.32 7a5.5 5.5 0 1 1 -4.64 0");
}
</style><g class="s0phu2bbs"><path class="jxwl6acrk"/><path class="m9suxjxea"/><path class="rycut8jxl"/><path class="v-m1aobza"/><path class="e0ead5bmw"/><path class="pf-zwj5ei"/></g>`,
		"fallback": "iconmind:nudge-duotone-bold",
	});
}

export default Component;
