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
		"content": `<style>.cs9rnyhsz {
  d: path("M12.183 19.834L11 20.5L3 16V7l8-4.5L19 7v5.321");
}

.d_tfc_j6y {
  d: path("m3 7l8 4.5L19 7m-8 4.5v9m5.75-3h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75m-.25 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cs9rnyhsz"/><path class="d_tfc_j6y"/></g>`,
		"fallback": "uix:secure-data-room",
	});
}

export default Component;
