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

.leya5hbyw {
  d: path("M6.5 2.5v6L3 21h10l-.167-.596m-.566-2.023L9.5 8.5v-6M5 2.5h6m10.5 15.25a3.25 3.25 0 1 1-3.25-3.25");
}

.vdlegrbpz {
  d: path("m17 13.25l1.25 1.25L17 15.75");
}
</style><g class="hntgybcog"><path class="leya5hbyw"/><path class="vdlegrbpz"/></g>`,
		"fallback": "uix:trial-repeat",
	});
}

export default Component;
