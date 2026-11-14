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

.rovth7z5f {
  d: path("M3 9c4-2 6 2 9 0s5 2 9 0M3 14.75c4-2 6 2 9 0s5 2 9 0");
}

.yd-ecgb4e {
  d: path("M6.5 3.5h11A3.5 3.5 0 0 1 21 7v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="yd-ecgb4e"/><path class="rovth7z5f"/></g>`,
		"fallback": "uix:strata-dig-layers",
	});
}

export default Component;
