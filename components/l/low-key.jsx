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
		"content": `<style>.kjjgjvbpo {
  fill: currentColor;
  d: path("M4.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.o25klbbjj {
  d: path("M15.949 4.218a9.5 9.5 0 0 1 0 15.564");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kjjgjvbpo"/><path class="o25klbbjj"/></g>`,
		"fallback": "uix-sharp:low-key",
	});
}

export default Component;
