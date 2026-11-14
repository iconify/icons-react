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
		"content": `<style>.dbiiflg2z {
  d: path("M5.125 2.5h2.75A2.625 2.625 0 0 1 10.5 5.125v1.75A2.625 2.625 0 0 1 7.875 9.5h-2.75A2.625 2.625 0 0 1 2.5 6.875v-1.75A2.625 2.625 0 0 1 5.125 2.5m11 12h2.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-2.75a2.625 2.625 0 0 1-2.625-2.625v-1.75a2.625 2.625 0 0 1 2.625-2.625M10.5 6h5a2 2 0 0 1 2 2v6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.orua6n77n {
  d: path("m15 12l2.5 2.5L20 12");
}
</style><g class="hntgybcog"><path class="dbiiflg2z"/><path class="orua6n77n"/></g>`,
		"fallback": "uix:visual-programming",
	});
}

export default Component;
