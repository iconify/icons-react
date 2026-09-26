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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hrzs9nb5f {
  stroke-opacity: 0.4;
  d: path("M2 5L17 5M6 12L22 12M6 19L22 19");
}

.jjm1ldbgr {
  d: path("M3 11L3 20");
}
</style><g class="gp_8x1bzb"><path class="hrzs9nb5f"/><path class="jjm1ldbgr"/></g>`,
		"fallback": "keyline-icons:text-quote-sharp-duotone",
	});
}

export default Component;
