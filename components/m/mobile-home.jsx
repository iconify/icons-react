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
		"content": `<style>.f-09fpb6n {
  d: path("M5.5 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m10 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-5-10h3A1.5 1.5 0 0 1 15 11v1a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 12v-1a1.5 1.5 0 0 1 1.5-1.5");
}

.f9q6f2s2z {
  d: path("M3 18V8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V18Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f9q6f2s2z"/><path class="f-09fpb6n"/></g>`,
		"fallback": "uix:mobile-home",
	});
}

export default Component;
