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
		"content": `<style>.bshqhtb0t {
  d: path("m10.5 8l4 4l-4 4l-4-4Zm-8 4h4m4-4V5H21M10.5 16v3H21");
}

.mg4mvrbnk {
  d: path("M18.5 2.5L21 5l-2.5 2.5m0 9L21 19l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bshqhtb0t"/><path class="mg4mvrbnk"/></g>`,
		"fallback": "uix-sharp:routing-rule",
	});
}

export default Component;
