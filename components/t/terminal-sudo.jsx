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
		"content": `<style>.dw2ryo68h {
  d: path("M11.4 18H2.5V3.5h18v8.7");
}

.lhvhjnx9p {
  d: path("m6 6.5l3 3l-3 3m5 0h3m4 1.75l3.75 1.5V18c0 2-1.5 3.25-3.75 4c-2.25-.75-3.75-2-3.75-4v-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dw2ryo68h"/><path class="lhvhjnx9p"/></g>`,
		"fallback": "uix-sharp:terminal-sudo",
	});
}

export default Component;
