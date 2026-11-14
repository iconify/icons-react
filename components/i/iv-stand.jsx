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

.hu7sc1buo {
  fill: currentColor;
  d: path("M3.75 21a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m15 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m-7.5-.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}

.yn11skuam {
  d: path("M12 3.5V18M7 3.5h10M4.5 20l7.5-2l7.5 2M17 3.5c1.75 0 1.75 3 0 3m-10-3v2m0 0za2.25 2.25 0 0 1 2.25 2.25v2A2.25 2.25 0 0 1 7 12a2.25 2.25 0 0 1-2.25-2.25v-2A2.25 2.25 0 0 1 7 5.5M7 12v3");
}
</style><g class="hntgybcog"><path class="yn11skuam"/><path class="hu7sc1buo"/></g>`,
		"fallback": "uix:iv-stand",
	});
}

export default Component;
