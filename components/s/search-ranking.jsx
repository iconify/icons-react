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
		"content": `<style>.erbwi5cqq {
  d: path("M3 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m12.75 5.25L21 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf_wwj37x {
  d: path("M9.25 8.5L11 7.25V14");
}
</style><g class="hntgybcog"><path class="erbwi5cqq"/><path class="vf_wwj37x"/></g>`,
		"fallback": "uix:search-ranking",
	});
}

export default Component;
