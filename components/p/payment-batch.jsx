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
		"content": `<style>.c003hd9-z {
  d: path("M5.25 10V7.25h13V18H15.5");
}

.dyl18hg0j {
  d: path("M8 7.25V4.5h13v10.75h-2.75M5.5 15.5h7M10 13l2.5 2.5L10 18");
}

.frmyt1bsi {
  d: path("M5.125 10h7.75a2.625 2.625 0 0 1 2.625 2.625v5.75A2.625 2.625 0 0 1 12.875 21h-7.75A2.625 2.625 0 0 1 2.5 18.375v-5.75A2.625 2.625 0 0 1 5.125 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="frmyt1bsi"/><path class="c003hd9-z"/><path class="dyl18hg0j"/></g>`,
		"fallback": "uix:payment-batch",
	});
}

export default Component;
