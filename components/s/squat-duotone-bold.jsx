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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.gclj5pmhl {
  d: path("M8 8v5h6v8");
}

.povg_rnmz {
  fill: currentColor;
  d: path("M5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vy55o7bfi {
  d: path("M5 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="povg_rnmz"/><path class="vy55o7bfi"/><path class="gclj5pmhl"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:squat-duotone-bold",
	});
}

export default Component;
