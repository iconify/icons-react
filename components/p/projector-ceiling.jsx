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
		"content": `<style>.eaui5k2fo {
  d: path("M5 8.5h14v7H5Zm7-6v6m-4-6h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvitzhbiq {
  d: path("M13.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM10 19l-3 2m7-2l3 2");
}
</style><g class="ulnmmdpxh"><path class="eaui5k2fo"/><path class="uvitzhbiq"/></g>`,
		"fallback": "uix-sharp:projector-ceiling",
	});
}

export default Component;
