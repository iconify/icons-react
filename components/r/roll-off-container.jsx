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

.qz_srpbpr {
  d: path("M4.25 6h11.525a1.75 1.75 0 0 1 1.238.513l2.974 2.974a1.75 1.75 0 0 1 .513 1.238v2.025a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 4.25 6");
}

.xez1sttky {
  d: path("m18.5 8l2-2V3.5h-1.75M2.5 17.5h18M4.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m11 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="qz_srpbpr"/><path class="xez1sttky"/></g>`,
		"fallback": "uix:roll-off-container",
	});
}

export default Component;
