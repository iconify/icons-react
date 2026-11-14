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
		"content": `<style>.tc3bcib6n {
  d: path("M6 14.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0h4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vtb9yywnl {
  d: path("m3 9l9-6.5L21 9v12.5H3Z");
}
</style><g class="ulnmmdpxh"><path class="vtb9yywnl"/><path class="tc3bcib6n"/></g>`,
		"fallback": "uix-sharp:kitchen-shop",
	});
}

export default Component;
