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
		"content": `<style>.e07yfvb0w {
  d: path("M7 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7.183 15H3c0-4.5 3.25-8 7.5-8c1.728 0 3.291.579 4.537 1.568");
}

.iejc_vbnc {
  d: path("m8 16l2.5 1.25L13 16v2.5l-2.5-1.25L8 18.5Zm11-2.5v2c-1.5.5-2 1.5-2 2.5v3.5h4V18c0-1-.5-2-2-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e07yfvb0w"/><path class="iejc_vbnc"/></g>`,
		"fallback": "uix-sharp:sommelier",
	});
}

export default Component;
