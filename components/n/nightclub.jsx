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

.o0ph058-q {
  d: path("M9 13.5a3 7.5 0 1 0 6 0a3 7.5 0 1 0-6 0");
}

.vi4ej8blj {
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0m7.5-11V6m-7.5 7.5h15");
}
</style><g class="hntgybcog"><path class="vi4ej8blj"/><path class="o0ph058-q"/></g>`,
		"fallback": "uix:nightclub",
	});
}

export default Component;
