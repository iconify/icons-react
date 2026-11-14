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
		"content": `<style>.uz0t2g7em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 6l-4.5 6L7 18M17 6l4.5 6l-4.5 6M9.5 9a2.5 2.5 0 1 1 3.5 2.25c-.75.25-1 1-1 1.75v.5m0 3.5h.01");
}
</style><path class="uz0t2g7em"/>`,
		"fallback": "uix-sharp:query-params",
	});
}

export default Component;
