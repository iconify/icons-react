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

.k_2h91g8y {
  d: path("M6 19a8.5 8.5 0 1 1 12 0m-6-6l3.5-3.5");
}

.wuzieab_m {
  d: path("M14.25 9.5za1.25 1.25 0 0 1 1.25 1.25a.518.518 0 0 1-.884.366l-.732-.732a.518.518 0 0 1 .366-.884M12 13h.01");
}
</style><g class="hntgybcog"><path class="k_2h91g8y"/><path class="wuzieab_m"/></g>`,
		"fallback": "uix:reading-actual",
	});
}

export default Component;
