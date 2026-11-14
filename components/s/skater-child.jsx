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
		"content": `<style>.e0_r5kb-u {
  d: path("M8.75 5.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 6V16m-2.25 5.5L12 16l2.25 5.5M6 13h12");
}

.ijosq8oij {
  d: path("M7 21.5h9a1.5 1.5 0 0 0 1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e0_r5kb-u"/><path class="ijosq8oij"/></g>`,
		"fallback": "uix-sharp:skater-child",
	});
}

export default Component;
