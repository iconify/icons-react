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
		"content": `<style>.ghoiyebfg {
  d: path("m17.25 18.75l2.5-.25L20 21");
}

.pa-nl2bxr {
  d: path("M6 4.25a6 1.75 0 1 0 12 0a6 1.75 0 1 0-12 0Z");
}

.te7p_bc5x {
  d: path("M6 12v1.5a6 1.75 0 0 0 12 0V12M3 15.5a9 6 0 0 0 16.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ws_9p-nyo {
  d: path("M6 4.25v1.5a6 1.75 0 0 0 12 0v-1.5M6 12a6 1.75 0 1 0 12 0a6 1.75 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="pa-nl2bxr"/><path class="ws_9p-nyo"/><path class="te7p_bc5x"/><path class="ghoiyebfg"/></g>`,
		"fallback": "uix-sharp:payback-period",
	});
}

export default Component;
