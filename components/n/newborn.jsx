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
		"content": `<style>.cg8wkn4ku {
  d: path("M7.25 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0M8 14.5c2.5-.5 5.75.5 7.75 2.5");
}

.eaj606bzg {
  d: path("M16.015 3.39za6.5 6.5 0 0 1 3.144 8.638l-2.536 5.438a6.5 6.5 0 0 1-8.638 3.144a6.5 6.5 0 0 1-3.144-8.638l2.536-5.438a6.5 6.5 0 0 1 8.638-3.144");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eaj606bzg"/><path class="cg8wkn4ku"/></g>`,
		"fallback": "uix:newborn",
	});
}

export default Component;
