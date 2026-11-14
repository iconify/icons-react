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

.rwa29sbfa {
  d: path("M14 4.75A7.5 7.5 0 0 1 19.25 14m-2 3.25a7.5 7.5 0 0 1-10.5 0m-2-3.25A7.5 7.5 0 0 1 10 4.75");
}

.st2a3rx-a {
  d: path("M18 11.75L19.25 14l2.25-1.25m-12.25 4.5h-2.5v2.5M8.75 7L10 4.75L7.75 3.5M9.5 12l1.75 1.75l3.5-3.5");
}
</style><g class="hntgybcog"><path class="rwa29sbfa"/><path class="st2a3rx-a"/></g>`,
		"fallback": "uix:tdd",
	});
}

export default Component;
