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
		"content": `<style>.c6aqdwbsc {
  d: path("M10.5 15.25V12h3v3.25m-5.75 0v3.5m8.5-3.5v3.5M2.75 20.5q2.31-1.5 4.62 0c2.31 1.5 3.09 1 4.63 0s3.08-1 4.63 0s3.08 1 4.62 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4vmvub1w {
  d: path("m3.55 9.65l7.65-5.8q.8-.6 1.6 0l7.65 5.8q.8.6-.2.6h-.75q-1 0-1 1v3q0 1-1 1h-11q-1 0-1-1v-3q0-1-1-1h-.75q-1 0-.2-.6");
}
</style><g class="hntgybcog"><path class="j4vmvub1w"/><path class="c6aqdwbsc"/></g>`,
		"fallback": "iconoven:resort",
	});
}

export default Component;
