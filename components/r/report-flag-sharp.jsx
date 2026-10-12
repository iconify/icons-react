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
		"content": `<style>.o2v-4ebai {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.25c4.75-2 8.75 2 14.5 0l.99-.35l.01 1.05v8.85l-.005.525l-.495.175c-5.75 2-9.75-2-15 0Zm0 17v-17m7.25 2V9.5");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o2v-4ebai"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:report-flag-sharp",
	});
}

export default Component;
