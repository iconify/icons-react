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
		"content": `<style>.ejb2_jb8c {
  d: path("M13.75 6.25c-.35-.65-.95-1-1.75-1c-1 0-1.75.6-1.75 1.4c0 1.95 3.5 1.75 3.5 3.7m-3.5 3.4c.35.65.95 1 1.75 1c1 0 1.75-.6 1.75-1.4c0-1.95-3.5-1.75-3.5-3.7");
}

.f8-q27buo {
  d: path("M4.75 2.75h14.5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H11l-4.25 3.5v-3.5h-2a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f8-q27buo"/><path class="ejb2_jb8c"/></g>`,
		"fallback": "iconoven:legal-consult",
	});
}

export default Component;
