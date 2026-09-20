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
		"content": `<style>.c6uw-ccfl {
  d: path("M7 14h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kkid9bb2e {
  d: path("M5 14a3 3 0 0 1 0 -6");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.sgdt4_0wi {
  d: path("M5 8h14v5a7 5 0 0 1 -14 0Z");
}

.spncj1b6w {
  d: path("M19 8a3 3 0 0 1 0 6");
}

.vu3nbmi6d {
  fill: currentColor;
  d: path("M5 8h14v5a7 5 0 0 1 -14 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="vu3nbmi6d"/><path class="sgdt4_0wi"/><path class="s09hy0b0y"/><path class="c6uw-ccfl"/><path class="kkid9bb2e"/><path class="spncj1b6w"/></g>`,
		"fallback": "iconmind:surgery-duotone-thin",
	});
}

export default Component;
