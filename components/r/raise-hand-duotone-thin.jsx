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

.mgib8v4wh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 21v-8a2 2 0 0 1 4 0V9a2 2 0 0 1 4 0v4a2 2 0 0 1 4 0v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n5c3em2az {
  d: path("M7 21v-8a2 2 0 0 1 4 0V9a2 2 0 0 1 4 0v4a2 2 0 0 1 4 0v4");
}

.r15ruzbdn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 9V4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xar3kncqc {
  d: path("M15 9V4");
}
</style><g class="hntgybcog"><path class="mgib8v4wh"/><path class="r15ruzbdn"/><path class="n5c3em2az"/><path class="xar3kncqc"/></g>`,
		"fallback": "iconmind:raise-hand-duotone-thin",
	});
}

export default Component;
