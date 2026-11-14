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

.qpo6ebc6v {
  d: path("M10.5 8.5h8v4a2.25 2.25 0 1 1 0 4v4h-8v-5");
}

.un5cyo64d {
  d: path("M2.5 3.5h8v5a2.25 2.25 0 1 1 0 4v3h-8Z");
}
</style><g class="hntgybcog"><path class="un5cyo64d"/><path class="qpo6ebc6v"/></g>`,
		"fallback": "uix:interoperability",
	});
}

export default Component;
