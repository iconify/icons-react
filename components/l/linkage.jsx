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

.n9e552oxs {
  d: path("M5.25 15h7.25a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25A2.25 2.25 0 0 1 5.25 15");
}

.spfm8cubi {
  d: path("m10.801 15.571l6-10.392a2.25 2.25 0 0 1 3.074-.824a2.25 2.25 0 0 1 .824 3.074l-6 10.392a2.25 2.25 0 0 1-3.074.824a2.25 2.25 0 0 1-.824-3.074M4.75 17.25h.01m7.74 0h.01M19 5.75h.01");
}
</style><g class="hntgybcog"><path class="n9e552oxs"/><path class="spfm8cubi"/></g>`,
		"fallback": "uix:linkage",
	});
}

export default Component;
