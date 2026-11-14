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
		"content": `<style>.sern725pt {
  d: path("M15.031 10.25a3.5 3.5 0 0 1-6.062 0M7 15h9.5M7 18h6");
}

.t49li2qab {
  d: path("M5.5 3.5h13a2 2 0 0 1 2 2V15L15 20.5H5.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Zm4 3.5h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t49li2qab"/><path class="sern725pt"/></g>`,
		"fallback": "uix-sharp:mood-note",
	});
}

export default Component;
