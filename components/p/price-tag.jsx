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

.i1t46rt8z {
  cx: 12px;
  cy: 7.75px;
  r: 1.5px;
}

.t8u-hjb1k {
  d: path("M9.25 12.75h5.5m-5.5 3.5h3.5");
}

.w1w8zudbu {
  d: path("m6.85 6.6l4.4-3.6a1.2 1.2 0 0 1 1.5 0l4.4 3.6a2 2 0 0 1 .6 1.43v11.22a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2V8.03a2 2 0 0 1 .6-1.43");
}
</style><g class="hntgybcog"><path class="w1w8zudbu"/><circle class="i1t46rt8z"/><path class="t8u-hjb1k"/></g>`,
		"fallback": "iconoven:price-tag",
	});
}

export default Component;
