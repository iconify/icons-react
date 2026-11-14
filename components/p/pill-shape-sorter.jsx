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
		"content": `<style>.jeoaurmiu {
  d: path("M2.5 4.5h19v15h-19Zm9.5 0v15");
}

.mk8d-lbbo {
  d: path("M5 12a2.25 2.25 0 1 0 4.5 0A2.25 2.25 0 1 0 5 12Zm9.75-4.5h4v9h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jeoaurmiu"/><path class="mk8d-lbbo"/></g>`,
		"fallback": "uix-sharp:pill-shape-sorter",
	});
}

export default Component;
