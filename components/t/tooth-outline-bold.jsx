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
		"content": `<style>.lwsbwehaq {
  d: path("M7 5a4 4 0 0 1 5 2 4 4 0 0 1 5 -2c2 4 0 14 -2.5 14 -1.5 0 -1.5 -6 -2.5 -6s-1 6 -2.5 6C7 19 5 9 7 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="s0phu2bbs"><path class="lwsbwehaq"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:tooth-outline-bold",
	});
}

export default Component;
