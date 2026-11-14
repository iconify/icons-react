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
		"content": `<style>.a941o5jru {
  d: path("M6.5 9v3.5c0 1.5 1 2.25 2.5 2.25h3m.25-.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oej7-fbsp {
  d: path("M14.25 20s-6-3.5-6-7.5c0-1.75 1.5-3 3.25-3c1 0 2.25.75 2.75 1.5c.5-.75 1.75-1.5 2.75-1.5c1.75 0 3.25 1.25 3.25 3c0 4-6 7.5-6 7.5M3 2.5v3C3 7.5 4.5 9 6.5 9S10 7.5 10 5.5v-3");
}
</style><g class="hntgybcog"><path class="oej7-fbsp"/><path class="a941o5jru"/></g>`,
		"fallback": "uix:stethoscope-heart",
	});
}

export default Component;
