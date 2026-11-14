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
		"content": `<style>.acgtci8uc {
  d: path("M9.5 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7w-73b2w {
  d: path("M5.125 4.5h13.75A2.625 2.625 0 0 1 21.5 7.125v9.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 16.875v-9.75A2.625 2.625 0 0 1 5.125 4.5M7 4.5v15m5-15v7.25m5-7.25v15");
}
</style><g class="hntgybcog"><path class="l7w-73b2w"/><path class="acgtci8uc"/></g>`,
		"fallback": "uix:playpen",
	});
}

export default Component;
