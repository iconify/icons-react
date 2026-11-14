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
		"content": `<style>.c7gmcgbbb {
  d: path("M3 6h18v15H3Zm5.5 0L12 2.75L15.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zafaxeblb {
  d: path("m3 18l6-5.5l5 5l2.5-2.25L21 19m-6.75-8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="c7gmcgbbb"/><path class="zafaxeblb"/></g>`,
		"fallback": "uix-sharp:picture-frame-wall",
	});
}

export default Component;
