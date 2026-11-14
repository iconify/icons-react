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
		"content": `<style>.iihfrlmdk {
  d: path("M7.75 10.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM5 21.5c0-1.5 3-2.75 7-2.75s7 1.25 7 2.75m-1.25-8.25a2.5 2.5 0 0 1-2.5 2.5");
}

.mjl0m97gs {
  d: path("M6.25 8.25a5.75 5.75 0 0 1 11.5 0m-13 0h3v5h-3Zm11.5 0h3v5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mjl0m97gs"/><path class="iihfrlmdk"/></g>`,
		"fallback": "uix-sharp:radio-host",
	});
}

export default Component;
