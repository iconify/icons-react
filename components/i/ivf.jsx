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
		"content": `<style>.c8ulaubzh {
  d: path("M2.5 16.25V18c0 2 3.75 3.5 8.5 3.5s8.5-1.5 8.5-3.5v-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrkyv0jrj {
  d: path("M8.75 16.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4-4.25L17 6.75m2.196-3.974za1.5 1.5 0 0 1 .185 2.114l-.964 1.149a1.5 1.5 0 0 1-2.113.185a1.5 1.5 0 0 1-.185-2.114l.964-1.149a1.5 1.5 0 0 1 2.113-.185");
}

.u39p0pb4z {
  d: path("M2.5 16.25a8.5 3 0 1 0 17 0a8.5 3 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="u39p0pb4z"/><path class="c8ulaubzh"/><path class="lrkyv0jrj"/></g>`,
		"fallback": "uix:ivf",
	});
}

export default Component;
