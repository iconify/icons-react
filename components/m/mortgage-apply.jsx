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
		"content": `<style>.bk4dw2bqr {
  d: path("M7.5 6H10v2.5H7.5Zm5 1.25h4m-9 4H10v2.5H7.5Zm5 1.25h3.8m-1.55 5.25l3.25-3l3.25 3v3.5h-6.5Z");
}

.mtmpcib6r {
  d: path("M11.9 21.5H4.5v-19h15v9.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtmpcib6r"/><path class="bk4dw2bqr"/></g>`,
		"fallback": "uix-sharp:mortgage-apply",
	});
}

export default Component;
