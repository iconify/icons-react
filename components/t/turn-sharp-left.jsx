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

.j-zv-trfl {
  d: path("M6.5 9.5V15H12");
}

.z9m68sbcd {
  d: path("M17.5 20.5V4l-11 11");
}
</style><g class="hntgybcog"><path class="z9m68sbcd"/><path class="j-zv-trfl"/></g>`,
		"fallback": "uix:turn-sharp-left",
	});
}

export default Component;
