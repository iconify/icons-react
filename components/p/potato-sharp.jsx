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
		"content": `<style>.ayfravsaf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.25 9.25h.01M15 10.5h.01m-4.26 5.25h.01");
}

.co39l143y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5c2.5-2.5 6.75-3 10-1.25s4.25 5.25 3.5 8.5c-.75 3.5-3.5 6.25-7.5 7C9 21.5 5.5 20 4.25 17S4.5 8.5 6.5 6.5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="co39l143y"/><path class="ayfravsaf"/></g>`,
		"fallback": "iconoven:potato-sharp",
	});
}

export default Component;
