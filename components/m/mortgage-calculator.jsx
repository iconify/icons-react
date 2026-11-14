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
		"content": `<style>.mtmpcib6r {
  d: path("M11.9 21.5H4.5v-19h15v9.8");
}

.ony0ltbnf {
  d: path("M7.5 5.5h9V9h-9Zm1 7.25h.01m3.49 0h.01m3.49 0h.01M8.5 16.5h.01m3.49 0h.01m2.74 1.25l3.25-3l3.25 3v3.5h-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtmpcib6r"/><path class="ony0ltbnf"/></g>`,
		"fallback": "uix-sharp:mortgage-calculator",
	});
}

export default Component;
