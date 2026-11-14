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
		"content": `<style>.br_p43b2k {
  d: path("m12 5.5l.585-1.171a1.5 1.5 0 0 1 1.342-.829h4.146a1.5 1.5 0 0 1 1.342.829L20 5.5a1.382 1.382 0 0 1-1.236 2h-5.528A1.382 1.382 0 0 1 12 5.5m6 9V18m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kg7uilhnr {
  d: path("M3 21h6m-3 0V8.5a5 5 0 0 1 5-5h2");
}
</style><g class="hntgybcog"><path class="kg7uilhnr"/><path class="br_p43b2k"/></g>`,
		"fallback": "uix:street-light-fault",
	});
}

export default Component;
