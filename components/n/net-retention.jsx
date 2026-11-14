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
		"content": `<style>.bd-w_8bqd {
  d: path("m2 14l2-2l2 2m2.5-2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.fjmk1tc6j {
  d: path("M12 4a8 8 0 1 1-8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fjmk1tc6j"/><path class="bd-w_8bqd"/></g>`,
		"fallback": "uix:net-retention",
	});
}

export default Component;
