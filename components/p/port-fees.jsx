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
		"content": `<style>.a8l0wpb6q {
  d: path("M2.5 7h17l-2 5h-13ZM6 7V3h5.5v4m-9 9.5H11V21m3-3a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="a8l0wpb6q"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:port-fees",
	});
}

export default Component;
