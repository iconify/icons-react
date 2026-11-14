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
		"content": `<style>.c8c_z9g5n {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v6.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-6.75A4.375 4.375 0 0 1 6.875 4");
}

.fs4wcyb9b {
  d: path("M6 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9 8.5c0-3 1.5-5 3.5-5c1.75 0 3.25 1.25 4 2.75c.5-.75 1.75-1.5 3.5-1.5s3 1.25 3 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c8c_z9g5n"/><path class="fs4wcyb9b"/></g>`,
		"fallback": "uix:team-photo",
	});
}

export default Component;
