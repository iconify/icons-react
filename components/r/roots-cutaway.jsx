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
		"content": `<style>.r86448bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 10h12.75A2.625 2.625 0 0 1 21 12.625v5.75A2.625 2.625 0 0 1 18.375 21H5.625A2.625 2.625 0 0 1 3 18.375v-5.75A2.625 2.625 0 0 1 5.625 10M12 10V7m0 0Q8 7 7.5 3.5q4 0 4.5 3.5q.5-3.5 4.5-3.5Q16 7 12 7m0 3v8m0-5.5l-4 4m4-4l4 4");
}
</style><path class="r86448bau"/>`,
		"fallback": "uix:roots-cutaway",
	});
}

export default Component;
