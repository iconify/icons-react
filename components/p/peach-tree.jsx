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

.om96lmbez {
  fill: currentColor;
  d: path("M8 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5-3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ye27u3bok {
  d: path("M8 16.5A4 4 0 0 1 6.5 9a5.5 5.5 0 0 1 11 0a4 4 0 0 1-1.5 7.5Zm4 0v5");
}
</style><g class="hntgybcog"><path class="ye27u3bok"/><path class="om96lmbez"/></g>`,
		"fallback": "uix:peach-tree",
	});
}

export default Component;
