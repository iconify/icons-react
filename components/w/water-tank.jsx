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
		"content": `<style>.gevrtubnm {
  d: path("M4.5 4.5v7a7.5 2 0 0 0 15 0v-7m-13 8.75L5 21.5m12.5-8.25L19 21.5m-16.5 0h19m-15.75-4h12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p35z-8b4w {
  d: path("M4.5 4.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="p35z-8b4w"/><path class="gevrtubnm"/></g>`,
		"fallback": "uix:water-tank",
	});
}

export default Component;
