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

.umwujrb5g {
  d: path("M14.5 2.5v5h5M8 9.5h3.5m2 4.75l2-1.5v6");
}

.wsr5fgb5v {
  d: path("M4.5 2.5h10l5 5v14h-15Z");
}
</style><g class="hntgybcog"><path class="wsr5fgb5v"/><path class="umwujrb5g"/></g>`,
		"fallback": "uix:page-number",
	});
}

export default Component;
