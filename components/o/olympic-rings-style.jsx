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

.vhe0fzvoo {
  d: path("M2.25 10.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m6.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m6.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.y16oc3b2a {
  d: path("M5.5 13.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m6.5 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="vhe0fzvoo"/><path class="y16oc3b2a"/></g>`,
		"fallback": "uix:olympic-rings-style",
	});
}

export default Component;
