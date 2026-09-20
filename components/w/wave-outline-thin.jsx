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

.w6w8km5nw {
  d: path("M3 14a9 9 0 0 1 16 -5 4.5 4.5 0 0 0 -7 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="w6w8km5nw"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:wave-outline-thin",
	});
}

export default Component;
