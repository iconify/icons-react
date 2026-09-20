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
		"content": `<style>.aet-qcc4s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 21v-4c-2 -1 -3 -4 -3 -7a6 6 0 0 1 12 0c0 2 -2 3 -3 3s-2 -1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mm7_1psrl {
  d: path("M8 21v-4c-2 -1 -3 -4 -3 -7a6 6 0 0 1 12 0c0 2 -2 3 -3 3s-2 -1 -2 -2");
}
</style><g class="hntgybcog"><path class="aet-qcc4s"/><path class="mm7_1psrl"/></g>`,
		"fallback": "iconmind:listen-duotone-thin",
	});
}

export default Component;
