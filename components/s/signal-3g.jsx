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
		"content": `<style>.aol6robuk {
  fill: currentColor;
  d: path("M5.25 14zA1.75 1.75 0 0 1 7 15.75v3a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 5.25 14m6.5-4.75zA1.75 1.75 0 0 1 13.5 11v7.75a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 10 18.75V11a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z86y2fbsa {
  d: path("M18.25 3.5zA1.75 1.75 0 0 1 20 5.25v13.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75V5.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="aol6robuk"/><path class="z86y2fbsa"/></g>`,
		"fallback": "uix:signal-3g",
	});
}

export default Component;
