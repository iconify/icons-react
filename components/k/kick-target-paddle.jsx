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
		"content": `<style>.d2dtgvb9h {
  d: path("M5.5 3.5h9a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Zm11 4.5c4.5 0 4.5 8 0 8");
}

.mc2_zvbdx {
  d: path("M6.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2dtgvb9h"/><path class="mc2_zvbdx"/></g>`,
		"fallback": "uix-sharp:kick-target-paddle",
	});
}

export default Component;
