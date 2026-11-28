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

.t909j0l7m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
  stroke: none;
}

.zir_4k0sp {
  d: path("M9.5 7L14.5 7M17 9.5L17 14.5M9.5 17L14.5 17M7 9.5L7 14.5");
}
</style><g class="gp_8x1bzb"><path class="t909j0l7m"/><path class="zir_4k0sp"/></g>`,
		"fallback": "keyline-icons:square-padding-sharp-duotone",
	});
}

export default Component;
