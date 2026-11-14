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
		"content": `<style>.he9e6-b4j {
  d: path("M6.25 5.25h11.5v10H6.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umy-09bor {
  d: path("M3.5 2.5h17V18h-17ZM12 18v3.5m-3.5 0h7");
}
</style><g class="ulnmmdpxh"><path class="umy-09bor"/><path class="he9e6-b4j"/></g>`,
		"fallback": "uix-sharp:smart-display",
	});
}

export default Component;
