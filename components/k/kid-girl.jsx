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

.igeo-lhjd {
  d: path("M4.5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.zdf-nrb2h {
  d: path("M7.5 9.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M5 21.5c0-3 3-4.5 7-4.5s7 1.5 7 4.5");
}
</style><g class="hntgybcog"><path class="zdf-nrb2h"/><path class="igeo-lhjd"/></g>`,
		"fallback": "uix:kid-girl",
	});
}

export default Component;
