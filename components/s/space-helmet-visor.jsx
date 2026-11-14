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

.mj3tckbjz {
  d: path("M6 19.5a9 9 0 1 1 12 0Z");
}

.yhydg0b6f {
  d: path("M10 7.5h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-.5 5.25l2.25-2.25");
}
</style><g class="hntgybcog"><path class="mj3tckbjz"/><path class="yhydg0b6f"/></g>`,
		"fallback": "uix:space-helmet-visor",
	});
}

export default Component;
