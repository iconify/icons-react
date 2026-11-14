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
		"content": `<style>.flqekybdu {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.g59r9obmw {
  d: path("M13.5 9h4l4 4v4h-19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o1jr-o3li {
  d: path("M2.5 17V7A1.5 1.5 0 0 1 4 5.5h9.5V17");
}
</style><g class="hntgybcog"><path class="o1jr-o3li"/><path class="g59r9obmw"/><path class="flqekybdu"/></g>`,
		"fallback": "uix:store-delivery-van",
	});
}

export default Component;
