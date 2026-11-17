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
		"content": `<style>.bon5vccnt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m6 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0M3 6h2m4 0h2M3 18h8m4 0h6M18 3c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.ft5dv1b6b {
  fill: none;
}

.o59j9-irl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3c.002 1.005 1.995 2.998 3 3c-1.005.002-2.998 1.995-3 3c-.002-1.005-1.995-2.998-3-3c1.005-.002 2.998-1.995 3-3M7 8a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 8m6 12a2 2 0 1 1-.001-3.999A2 2 0 0 1 13 20");
}
</style><g class="ft5dv1b6b"><path class="o59j9-irl"/><path class="bon5vccnt"/></g>`,
		"fallback": "coolicons:slider-1-sparkle-duotone-sharp",
	});
}

export default Component;
