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
		"content": `<style>.c1choybaa {
  d: path("M3.5 12a8.5 6.5 0 1 0 17 0a8.5 6.5 0 1 0-17 0Z");
}

.torou4wml {
  d: path("M9 3h6v2.5H9Zm3 15.5v3m0-16a3.5 6.5 0 0 0 0 13m0-13a3.5 6.5 0 0 1 0 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c1choybaa"/><path class="torou4wml"/></g>`,
		"fallback": "uix-sharp:lunar-lantern",
	});
}

export default Component;
