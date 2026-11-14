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

.npjdwld4r {
  d: path("M14 2.5H3v19h11zL20 5v14l-6 2.5");
}

.ye8qu3m9f {
  d: path("m6 8.5l1.5-2l1 3l1-3l1.5 2v9H6Z");
}
</style><g class="hntgybcog"><path class="npjdwld4r"/><path class="ye8qu3m9f"/></g>`,
		"fallback": "uix:lifejacket-locker",
	});
}

export default Component;
