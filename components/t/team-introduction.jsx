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
		"content": `<style>.ed8embbyn {
  d: path("M15 7a1.25 1.25 0 0 1 2.5 0v1.75m2-2v2m0-4h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya6qt7bhu {
  d: path("M4.25 10a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 21.5c0-3.5 2.25-5.5 5-5.5s5 2 5 5.5m1.5-19h6A1.5 1.5 0 0 1 21.5 4v5.5A1.5 1.5 0 0 1 20 11h-4l-2.5 2v-2a1.5 1.5 0 0 1-1-1.5V4A1.5 1.5 0 0 1 14 2.5m1 2.25v4");
}
</style><g class="hntgybcog"><path class="ya6qt7bhu"/><path class="ed8embbyn"/></g>`,
		"fallback": "uix:team-introduction",
	});
}

export default Component;
