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

.j8cpct04c {
  d: path("M5.75 7.75h12.5l-1.4 12.1a1.5 1.5 0 0 1-1.5 1.4h-6.7a1.5 1.5 0 0 1-1.5-1.4Z");
}

.jqtnobcpa {
  d: path("m12.75 12.25l2-9.5h3M6.4 12.25h11.2");
}
</style><g class="hntgybcog"><path class="j8cpct04c"/><path class="jqtnobcpa"/></g>`,
		"fallback": "iconoven:juice-box",
	});
}

export default Component;
