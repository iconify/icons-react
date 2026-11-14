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
		"content": `<style>.n1cia05ds {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.nkxz43bbb {
  d: path("m6 12l1.5 9.5h9L18 12M6 12q1.5-1.75 3 0q1.5-1.75 3 0q1.5-1.75 3 0q1.5-1.75 3 0m-7.5-9.5h3V8h-3ZM12 8v6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nkxz43bbb"/><path class="n1cia05ds"/></g>`,
		"fallback": "uix-sharp:milk-frother",
	});
}

export default Component;
