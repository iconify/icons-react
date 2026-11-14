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

.n5w2i237e {
  d: path("M10 21v-5a2 2 0 0 1 4 0v5");
}

.uapk-rbxm {
  d: path("M4 21V11h4V8h2v3h4V8h2v3h4v10Z");
}
</style><g class="hntgybcog"><path class="uapk-rbxm"/><path class="n5w2i237e"/></g>`,
		"fallback": "uix:sandcastle",
	});
}

export default Component;
