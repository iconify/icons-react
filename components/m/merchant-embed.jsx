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
		"content": `<style>.gci--1bil {
  d: path("M7.75 4h8.5a5.25 5.25 0 0 1 5.25 5.25v5.5A5.25 5.25 0 0 1 16.25 20h-8.5a5.25 5.25 0 0 1-5.25-5.25v-5.5A5.25 5.25 0 0 1 7.75 4M2.5 9h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uf5bzmbar {
  d: path("m9.5 12.5l-2 2l2 2m5-4l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="gci--1bil"/><path class="uf5bzmbar"/></g>`,
		"fallback": "uix:merchant-embed",
	});
}

export default Component;
