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
		"content": `<style>.h82hcmbpo {
  stroke-linejoin: round;
  d: path("M17 4V20L20 16");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mk03vobfs {
  d: path("M6 11H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.tg0c1lbwk {
  d: path("M8 6L13 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.u9u89mb-h {
  d: path("M4 16L13 16");
}
</style><g class="ipq1z-bjh"><path class="u9u89mb-h"/><path class="mk03vobfs"/><path class="tg0c1lbwk"/><path class="h82hcmbpo"/></g>`,
		"fallback": "solar:sort-from-top-to-bottom-line-duotone",
	});
}

export default Component;
