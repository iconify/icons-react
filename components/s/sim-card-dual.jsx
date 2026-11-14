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

.mxbya3b-q {
  d: path("M10 5.5h6l4 4v10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2");
}

.r32ed_b0e {
  d: path("M8 18.5H6a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h6l3 3");
}

.x_qjjtbsh {
  d: path("M12.75 11.5h2.5A1.75 1.75 0 0 1 17 13.25v3A1.75 1.75 0 0 1 15.25 18h-2.5A1.75 1.75 0 0 1 11 16.25v-3a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="mxbya3b-q"/><path class="r32ed_b0e"/><path class="x_qjjtbsh"/></g>`,
		"fallback": "uix:sim-card-dual",
	});
}

export default Component;
