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
		"content": `<style>.a8j--682b {
  d: path("M12 18.5q-3.5.25-5.5-2q-2.5-2-2-5Q4 8 6.5 6q2-3.25 5.5-3.5q3.5.25 5.5 3.5q2.5 2 2 5.5q.5 3-2 5q-2 2.25-5.5 2Zm0 3V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_hg2rbce {
  d: path("M8.5 7.5L12 10l3.5-2.5m-7.5 4l4 2.5l4-2.5");
}
</style><g class="ulnmmdpxh"><path class="a8j--682b"/><path class="w_hg2rbce"/></g>`,
		"fallback": "uix-sharp:leaf-spinach",
	});
}

export default Component;
