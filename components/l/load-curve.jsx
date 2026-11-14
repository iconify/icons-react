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
		"content": `<style>.ijga2w9th {
  d: path("M7 16c1.5 0 2-6 3.75-6s1.75 3.5 3.5 3.5S16.5 7 20.5 7");
}

.j_q_y1bdx {
  d: path("M3.5 3.5v17h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_q_y1bdx"/><path class="ijga2w9th"/></g>`,
		"fallback": "uix-sharp:load-curve",
	});
}

export default Component;
