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
		"content": `<style>.ajs-20bhq {
  d: path("m3.812 10.36l3.9-4.875a2.63 2.63 0 0 1 2.05-.985h9.113A2.625 2.625 0 0 1 21.5 7.125v9.75a2.625 2.625 0 0 1-2.625 2.625H9.762a2.63 2.63 0 0 1-2.05-.985l-3.9-4.875a2.625 2.625 0 0 1 0-3.28");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w402l5bxo {
  d: path("M14.5 7.5s-3 3.25-3 5.5a3 3 0 0 0 6 0c0-2.25-3-5.5-3-5.5");
}
</style><g class="hntgybcog"><path class="ajs-20bhq"/><path class="w402l5bxo"/></g>`,
		"fallback": "uix:water-efficiency-label",
	});
}

export default Component;
