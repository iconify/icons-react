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
		"content": `<style>.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.r---z5hwn {
  d: path("M6.5 5.5h11v4h-11Zm0 7h11m-11 4h4m3 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="r---z5hwn"/></g>`,
		"fallback": "uix-sharp:masthead",
	});
}

export default Component;
