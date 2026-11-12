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

.n-8nhbbnb {
  d: path("M6 11H13");
}

.u9u89mb-h {
  d: path("M4 16L13 16");
}

.yoy8e1bnl {
  d: path("M8 6L13 6");
}
</style><g class="ipq1z-bjh"><path class="u9u89mb-h"/><path class="n-8nhbbnb"/><path class="yoy8e1bnl"/><path class="h82hcmbpo"/></g>`,
		"fallback": "solar:sort-from-top-to-bottom-linear",
	});
}

export default Component;
