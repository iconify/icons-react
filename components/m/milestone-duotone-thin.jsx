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
		"content": `<style>.afx93-brk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 7h10l-4 4 4 4H8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ior14cbcm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5g5kukae {
  d: path("M8 7h10l-4 4 4 4H8");
}

.qshaw154e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vavi9cbgb {
  d: path("M8 7v12");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="ior14cbcm"/><path class="qshaw154e"/><path class="afx93-brk"/><path class="z9ittvbis"/><path class="vavi9cbgb"/><path class="k5g5kukae"/></g>`,
		"fallback": "iconmind:milestone-duotone-thin",
	});
}

export default Component;
