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
		"content": `<style>.jqtnobcpa {
  d: path("m12.75 12.25l2-9.5h3M6.4 12.25h11.2");
}

.m-79nlbcc {
  d: path("M5.75 7.75h12.5l-1.4 12.1l-.094 1.403l-1.406-.003h-6.7l-1.406.003l-.094-1.403Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m-79nlbcc"/><path class="jqtnobcpa"/></g>`,
		"fallback": "iconoven:juice-sharp",
	});
}

export default Component;
