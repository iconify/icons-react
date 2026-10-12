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
		"content": `<style>.j_nyr2jke {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.75h16.5l-.65.76l-5.2 5.98l-.65.76v6.5l-.89-.45l-2.72-1.35l-.89-.45v-4.25l-.65-.76l-5.2-5.98l-.65-.76zm2.5 4h10.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ybnbbsg4m {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 3.25h.01m4.49 0h.01m4.49 0h.01");
}
</style><g class="ux2u0rbkq"><path class="ybnbbsg4m"/><path class="j_nyr2jke"/></g>`,
		"fallback": "iconoven:sales-funnel-sharp",
	});
}

export default Component;
