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
		"content": `<style>.c2u4o_y6l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.53 13.5h.01M9.23 16h.01m5.54 1.5h.01m3.69 2.5h.01");
}

.s7kq_t5cb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5q4.63-5 9.25 0t9.25 0M5.53 6.4V12m3.7-5.6v8.1m5.55-3.9V16m3.7-5.4v7.9");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="s7kq_t5cb"/><path class="c2u4o_y6l"/></g>`,
		"fallback": "iconoven:rna",
	});
}

export default Component;
