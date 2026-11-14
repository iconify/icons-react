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
		"content": `<style>.f_0l5nbmu {
  d: path("M2.5 12v3a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-3M8.75 7v7m6.5-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wb90duroj {
  d: path("M2.5 7h19v7h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wb90duroj"/><path class="f_0l5nbmu"/></g>`,
		"fallback": "uix-sharp:sleeping-pad",
	});
}

export default Component;
