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

.jpsyv1blb {
  d: path("M6 3h5a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 11 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3");
}

.lhiijub8e {
  d: path("M5.75 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-.25 6.5h6m6.5-1.75v3.5M18 21h.01");
}
</style><g class="hntgybcog"><path class="jpsyv1blb"/><path class="lhiijub8e"/></g>`,
		"fallback": "uix:travel-stolen-passport",
	});
}

export default Component;
