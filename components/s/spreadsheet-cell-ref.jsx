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
		"content": `<style>.c8xs3w9gw {
  d: path("M3 3h18v18H3Zm0 6h18M9 3v18");
}

.i5uunab7g {
  fill: currentColor;
  d: path("M12 12h6v6h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8xs3w9gw"/><path class="i5uunab7g"/></g>`,
		"fallback": "uix-sharp:spreadsheet-cell-ref",
	});
}

export default Component;
