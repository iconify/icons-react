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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6spdsbgb {
  d: path("M10.125 12L6 8L10.125 4M6 8L13 8M18 8H16");
}

.rm9mgg4hf {
  d: path("M13.875 20L18 16L13.875 12M18 16L11 16M6 16H8");
}
</style><g class="hntgybcog"><path class="i6spdsbgb"/><path class="rm9mgg4hf"/></g>`,
		"fallback": "solar:sort-horizontal-broken",
	});
}

export default Component;
