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
		"content": `<style>.dyhczfbhc {
  d: path("M14 17q1.75-1.5 3.5 0t3.5 0m-7 3.5q1.75-1.5 3.5 0t3.5 0");
}

.j8w1l_c7o {
  d: path("M11.2 21.5H4.5v-19h15v12.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j8w1l_c7o"/><path class="dyhczfbhc"/></g>`,
		"fallback": "uix-sharp:pond-liner",
	});
}

export default Component;
