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
		"content": `<style>.cfmb-ljza {
  d: path("M14 9a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 14 9M7.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9 13.5v4l-2.5 4m2.5-4l2.5 4m-2.5-7l5.5-4");
}

.ew5mqh5ja {
  d: path("M2.5 21.5v-18h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ew5mqh5ja"/><path class="cfmb-ljza"/></g>`,
		"fallback": "uix:penalty-save",
	});
}

export default Component;
