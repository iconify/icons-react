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
		"content": `<style>.dwlz50b1l {
  d: path("M17 3L21 3L21 7M21 17L21 21L17 21M12 3L15 3M12 21L15 21M21 9.5L21 14.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m060p1bup {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L9 2C9.5523 2 10 2.4477 10 3L10 21C10 21.5523 9.5523 22 9 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="m060p1bup"/><path class="dwlz50b1l"/></g>`,
		"fallback": "keyline-icons:panel-left-dashed-sharp-duotone",
	});
}

export default Component;
