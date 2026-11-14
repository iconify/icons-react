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
		"content": `<style>.b269h5dzp {
  d: path("m11.5 5.5l-4 4l4 4m-4-8l-4 4l4 4");
}

.f19y364fg {
  d: path("M7.5 9.5H15a5 5 0 0 1 0 10h-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f19y364fg"/><path class="b269h5dzp"/></g>`,
		"fallback": "uix:undo-all",
	});
}

export default Component;
