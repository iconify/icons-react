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
		"content": `<style>.ls1zbrb3o {
  fill: currentColor;
  d: path("M9.5 13h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1a07gb9q {
  d: path("M9 3v6L4 19a1.5 1.5 0 0 0 1.5 2h13a1.5 1.5 0 0 0 1.5-2L15 9V3M7.5 3h9");
}
</style><g class="ulnmmdpxh"><path class="w1a07gb9q"/><path class="ls1zbrb3o"/></g>`,
		"fallback": "uix-sharp:unit-test",
	});
}

export default Component;
