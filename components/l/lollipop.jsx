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
		"content": `<style>.c7idubb2d {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m6.5 6.5v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1r8o0bqa {
  d: path("M12 9a3 3 0 1 1-3 0");
}
</style><g class="hntgybcog"><path class="c7idubb2d"/><path class="y1r8o0bqa"/></g>`,
		"fallback": "uix:lollipop",
	});
}

export default Component;
