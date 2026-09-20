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
		"content": `<style>.gj3ndm0la {
  d: path("M15 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.k58cpbhds {
  d: path("m6 15 3 -3h6V7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sf6d_7c5k {
  d: path("M13 7h5");
}

.sprybdcan {
  d: path("M3 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="sprybdcan"/><path class="gj3ndm0la"/><path class="k58cpbhds"/><path class="sf6d_7c5k"/></g>`,
		"fallback": "iconmind:scooter-outline-bold",
	});
}

export default Component;
