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
		"content": `<style>.dg-a6abkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.464 8.464a5 5 0 0 1 7.072 0m0 7.072a5 5 0 0 1-7.072 0m-2.828-9.9a9 9 0 0 1 12.728 0m0 12.728a9 9 0 0 1-12.728 0");
}
</style><path class="dg-a6abkj"/>`,
		"fallback": "uix-sharp:live-badge-dot",
	});
}

export default Component;
