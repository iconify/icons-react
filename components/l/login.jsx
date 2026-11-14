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
		"content": `<style>.dnl-t-b2k {
  d: path("M11 6V4.5a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V18m-8-6h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-k1_cjpf {
  d: path("M12.5 8.5L16 12l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="dnl-t-b2k"/><path class="m-k1_cjpf"/></g>`,
		"fallback": "uix:login",
	});
}

export default Component;
