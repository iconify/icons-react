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
		"content": `<style>.ep1vzmbwa {
  d: path("M2.5 19C8 18 11 9 16 9c1.5 0 3.5 5 5.5 10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j675ko9wd {
  d: path("M10.5 16q2.5-1.75 5-.5M3.5 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ep1vzmbwa"/><path class="j675ko9wd"/></g>`,
		"fallback": "uix:sand-dune",
	});
}

export default Component;
