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
		"content": `<style>.c70vv4bjr {
  cx: 12px;
  cy: 4.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlzpcbbtm {
  d: path("M12 6.5v5.25m-1.5 0h3c3 .5 4.5 3 3.75 5.75c-.3 1.2-.2 2.4 2.25 3.75h-15c2.45-1.35 2.55-2.55 2.25-3.75c-.75-2.75.75-5.25 3.75-5.75m-7.75 9.5h18.5");
}
</style><g class="hntgybcog"><circle class="c70vv4bjr"/><path class="zlzpcbbtm"/></g>`,
		"fallback": "iconoven:plunger",
	});
}

export default Component;
