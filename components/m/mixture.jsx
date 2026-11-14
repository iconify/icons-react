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
		"content": `<style>.a7wk53b2o {
  d: path("M5.5 3H7v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1.5");
}

.lvzrmpbqe {
  d: path("M7 11q2.5-1.5 5 0t5 0m-7 5h.01m3.99-.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a7wk53b2o"/><path class="lvzrmpbqe"/></g>`,
		"fallback": "uix-sharp:mixture",
	});
}

export default Component;
