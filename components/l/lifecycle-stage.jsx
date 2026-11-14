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
		"content": `<style>.arph7ccat {
  fill: currentColor;
  d: path("M14.25 2.75a9.5 9.5 0 0 1 7 7l-1.5 1.5l-2-.75a6 6 0 0 0-4.25-4.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jiu2_ob8a {
  d: path("m14.25 21.25l-1.5-1.5l.75-2m-10.75-3.5l1.5-1.5l2 .75m3.5-10.75l1.5 1.5l-.75 2");
}

.q51ehrbug {
  d: path("M19.52 13.875a7.75 7.75 0 0 1-5.645 5.645m-3.75 0a7.75 7.75 0 0 1-5.645-5.645m0-3.75a7.75 7.75 0 0 1 5.645-5.645");
}
</style><g class="hntgybcog"><path class="q51ehrbug"/><path class="arph7ccat"/><path class="jiu2_ob8a"/></g>`,
		"fallback": "uix:lifecycle-stage",
	});
}

export default Component;
