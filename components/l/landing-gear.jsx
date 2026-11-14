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
		"content": `<style>.htxmtbrlg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19V5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3ZM12 8v9.5m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM7.5 8l4.5 4");
}
</style><path class="htxmtbrlg"/>`,
		"fallback": "uix-sharp:landing-gear",
	});
}

export default Component;
