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
		"content": `<style>.gs--odiwv {
  d: path("M11.991 14.5q-4.745-.005-9.491-5q9.5-10 19 0q-1.559 1.641-3.118 2.744");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4y_hr8pd {
  d: path("M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6 10.5a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0Zm-.75-3.75h.01M18 15h.01m3.24 1.25h.01");
}
</style><g class="ulnmmdpxh"><path class="gs--odiwv"/><path class="y4y_hr8pd"/></g>`,
		"fallback": "uix-sharp:pet-eye-exam",
	});
}

export default Component;
