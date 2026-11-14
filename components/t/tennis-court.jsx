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
		"content": `<style>.bhnbuwbfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h18v14H3Zm9 0v14m-9-7h18M7 8.5v7m10-7v7");
}
</style><path class="bhnbuwbfo"/>`,
		"fallback": "uix-sharp:tennis-court",
	});
}

export default Component;
