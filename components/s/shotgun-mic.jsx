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

.j_24ocb4k {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.25px;
}

.ms7n3zbod {
  d: path("M6 8.5h2m2 0h2m2 0h2m-5.25 2.25h2.5q1 0 .91 1l-.82 8.5q-.09 1-1.09 1h-.5q-1 0-1.09-1l-.82-8.5q-.09-1 .91-1");
}
</style><g class="hntgybcog"><rect class="j_24ocb4k"/><path class="ms7n3zbod"/></g>`,
		"fallback": "iconoven:shotgun-mic",
	});
}

export default Component;
