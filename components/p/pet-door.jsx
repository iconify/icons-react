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

.sh492v_ug {
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875V5.125A2.625 2.625 0 0 1 7.625 2.5");
}

.tq2j3cbfd {
  d: path("M7.5 12.5h9m-8 0v6h7v-6m0-4.5h.01");
}
</style><g class="hntgybcog"><path class="sh492v_ug"/><path class="tq2j3cbfd"/></g>`,
		"fallback": "uix:pet-door",
	});
}

export default Component;
