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
		"content": `<style>.h3yaj5y6f {
  d: path("M5.88 21.25v-3.5a1.5 1.5 0 0 1 3 0v3.5M15.13 12h3v3h-3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i17h_kenl {
  d: path("M2.75 21.25V10.5L7.38 6L12 10.5v-3L16.63 3l4.62 4.5v13.75ZM12 10.5v10.75");
}
</style><g class="hntgybcog"><path class="i17h_kenl"/><path class="h3yaj5y6f"/></g>`,
		"fallback": "iconoven:townhouse",
	});
}

export default Component;
