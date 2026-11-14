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
		"content": `<style>.e4347acqg {
  d: path("m8 11l4 3.5l4-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-6l5oj7n {
  d: path("M12 20.5L9 20a2.75 2.75 0 0 1-3.75-2.75a2.75 2.75 0 0 1-1.75-4.5A2.75 2.75 0 0 1 4.5 8A2.75 2.75 0 0 1 8 4.75a2.75 2.75 0 0 1 4-1.25a2.75 2.75 0 0 1 4 1.25A2.75 2.75 0 0 1 19.5 8a2.75 2.75 0 0 1 1 4.75a2.75 2.75 0 0 1-1.75 4.5A2.75 2.75 0 0 1 15 20Zm0 0v-12");
}
</style><g class="hntgybcog"><path class="z-6l5oj7n"/><path class="e4347acqg"/></g>`,
		"fallback": "uix:leaf-lettuce",
	});
}

export default Component;
