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

.peryhoawc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2C2.4477 2 2 2.4477 2 3L2 21C2 21.5523 2.4477 22 3 22L21 22C21.5523 22 22 21.5523 22 21L22 3C22 2.4477 21.5523 2 21 2L3 2Z");
  stroke: none;
}

.to0wy62et {
  d: path("M7.5 12L16.5 17L16.5 7L7.5 12Z");
}
</style><g class="gp_8x1bzb"><path class="peryhoawc"/><path class="to0wy62et"/></g>`,
		"fallback": "keyline-icons:square-caret-left-sharp-duotone",
	});
}

export default Component;
