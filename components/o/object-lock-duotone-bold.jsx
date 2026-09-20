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
		"content": `<style>.aq1lvs8nn {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.faeshgbjn {
  fill: currentColor;
  d: path("M8.5 16.5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pc5t8x4uc {
  d: path("M8.5 16.5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3jyuvbhp {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wi-4s5bun {
  d: path("M9.5 14.5a2.5 2.5 0 0 1 5 0");
}
</style><g class="s0phu2bbs"><path class="t3jyuvbhp"/><path class="faeshgbjn"/><path class="aq1lvs8nn"/><path class="pc5t8x4uc"/><path class="wi-4s5bun"/></g>`,
		"fallback": "iconmind:object-lock-duotone-bold",
	});
}

export default Component;
