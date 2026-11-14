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
		"content": `<style>.b8wk4uber {
  d: path("M2.5 5h19v14h-19Zm0 2l7 4.75M21.5 7l-7 4.75");
}

.k75cicnlr {
  d: path("M9 13.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM10.75 12l2.5 2.5m0-2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b8wk4uber"/><path class="k75cicnlr"/></g>`,
		"fallback": "uix-sharp:termination-letter",
	});
}

export default Component;
