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

.s40b1bc3m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ta3x4q95u {
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
}
</style><g class="hntgybcog"><path class="s40b1bc3m"/><path class="ta3x4q95u"/></g>`,
		"fallback": "iconmind:stock-split-duotone-thin",
	});
}

export default Component;
