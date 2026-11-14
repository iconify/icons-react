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
		"content": `<style>.ciiezih_i {
  d: path("M10.25 8h-3.5v3.5h1.5a2.25 2.25 0 0 1 0 4.5H6.5m9-8za2.25 2.25 0 0 1 2.25 2.25v3.5A2.25 2.25 0 0 1 15.5 16a2.25 2.25 0 0 1-2.25-2.25v-3.5A2.25 2.25 0 0 1 15.5 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iw49jcbqb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0");
}
</style><g class="hntgybcog"><path class="iw49jcbqb"/><path class="ciiezih_i"/></g>`,
		"fallback": "uix:speed-limit-sign",
	});
}

export default Component;
