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
		"content": `<style>.jer_tk4og {
  fill: currentColor;
  d: path("M12 4c6 0 10 3 10 8s-4 8 -10 8 -10 -3 -10 -8 4 -8 10 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.niggb1byh {
  d: path("M8 10h8v4H8Z");
}

.r9vsub3-y {
  fill: currentColor;
  d: path("M8 10h8v4H8Z");
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

.tlag47v4y {
  d: path("M12 4c6 0 10 3 10 8s-4 8 -10 8 -10 -3 -10 -8 4 -8 10 -8");
}
</style><g class="s0phu2bbs"><path class="jer_tk4og"/><path class="r9vsub3-y"/><path class="tlag47v4y"/><path class="niggb1byh"/></g>`,
		"fallback": "iconmind:stadium-duotone-bold",
	});
}

export default Component;
