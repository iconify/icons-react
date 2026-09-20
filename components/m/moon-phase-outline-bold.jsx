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
		"content": `<style>.hba66yqou {
  d: path("M18 7a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w88m64x8i {
  d: path("M2 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="s0phu2bbs"><path class="w88m64x8i"/><path class="hba66yqou"/></g>`,
		"fallback": "iconmind:moon-phase-outline-bold",
	});
}

export default Component;
