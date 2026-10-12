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
		"content": `<style>.c-m5iogoj {
  cx: 12px;
  cy: 15.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u_fjlxd9t {
  d: path("M5 8v8m14-8v8");
}

.xipv-o4kn {
  cx: 12px;
  cy: 8.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="u_fjlxd9t"/><circle class="xipv-o4kn"/><circle class="c-m5iogoj"/></g>`,
		"fallback": "iconoven:ratio",
	});
}

export default Component;
