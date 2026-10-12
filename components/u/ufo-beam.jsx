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

.t06rc_b9u {
  d: path("M9 6a3 3 0 0 1 6 0Z");
}

.t2dno2i3e {
  d: path("M3.25 9a8.75 3 0 1 0 17.5 0a8.75 3 0 1 0-17.5 0m7.5 5.5h2.5q1 0 1.58.82l3.59 5.11q.58.82-.42.82H6q-1 0-.42-.82l3.59-5.11q.58-.82 1.58-.82");
}
</style><g class="hntgybcog"><path class="t06rc_b9u"/><path class="t2dno2i3e"/></g>`,
		"fallback": "iconoven:ufo-beam",
	});
}

export default Component;
