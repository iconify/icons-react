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

.icammib3f {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5-12v10");
}

.jwwl4kb0c {
  d: path("M5 17.5v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4");
}
</style><g class="hntgybcog"><path class="icammib3f"/><path class="jwwl4kb0c"/></g>`,
		"fallback": "uix:syntax-tree",
	});
}

export default Component;
