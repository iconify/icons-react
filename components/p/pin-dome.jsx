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
		"content": `<style>.f5-wzybro {
  d: path("M10 20.5V17a2 2 0 0 1 4 0v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.islfer47r {
  d: path("M5 12a7 7 0 0 1 14 0M5.25 12h13.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 5.25 12M12 2.5V5");
}
</style><g class="hntgybcog"><path class="islfer47r"/><path class="f5-wzybro"/></g>`,
		"fallback": "uix:pin-dome",
	});
}

export default Component;
