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
		"content": `<style>.drftkjb-q {
  d: path("M11 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f7up_jefg {
  d: path("M6 3v18h12V3Z");
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.rf0c3ccmk {
  d: path("M9 16a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ync9d6bsc {
  d: path("M14 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="f7up_jefg"/><path class="lgr612izs"/><path class="drftkjb-q"/><path class="ync9d6bsc"/><path class="rf0c3ccmk"/></g>`,
		"fallback": "iconmind:pet-passport-outline-bold",
	});
}

export default Component;
