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
		"content": `<style>.ggmxwryuj {
  d: path("M3 21v-9a9 9 0 0 1 18 0v9M2.5 21h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgmb3ck6d {
  d: path("M7.5 9h9v10h-9Zm0 5.5h9");
}
</style><g class="ulnmmdpxh"><path class="ggmxwryuj"/><path class="zgmb3ck6d"/></g>`,
		"fallback": "uix-sharp:railway-cutting",
	});
}

export default Component;
