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
		"content": `<style>.hzn3tmbmt {
  d: path("M13.46 20.5H4v-10l8-7l7.503 6.565");
}

.ntbkwacax {
  d: path("M16 7V4h2v4.75m-1.75 8l2.25-2V21m-2.25 0h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hzn3tmbmt"/><path class="ntbkwacax"/></g>`,
		"fallback": "uix-sharp:mortgage-first-time-buyer",
	});
}

export default Component;
