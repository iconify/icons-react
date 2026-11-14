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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mr45h3c4a {
  d: path("M18 12h2.5l-4.25 4.25L18 18h-6v2.5l-4.25-4.25L6 18v-6H3.5l4.25-4.25L6 6h6V3.5l4.25 4.25L18 6Z");
}
</style><g class="hntgybcog"><path class="mr45h3c4a"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:ratchet",
	});
}

export default Component;
