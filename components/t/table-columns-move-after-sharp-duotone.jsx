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

.h18fjfbhh {
  d: path("M15 12L22 12M18.7071 8.7071L22 12L18.7071 15.2929");
}

.q6b_7xb6g {
  stroke-opacity: 0.4;
  d: path("M20 6L20 3L11 3M11 21L20 21L20 18");
}

.y8loosbry {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1 3C1 2.4477 1.4477 2 2 2L12 2L12 22L2 22C1.4477 22 1 21.5523 1 21Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="q6b_7xb6g"/><path clip-rule="evenodd" class="y8loosbry"/><path class="h18fjfbhh"/></g>`,
		"fallback": "keyline-icons:table-columns-move-after-sharp-duotone",
	});
}

export default Component;
