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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd-io5bwb {
  d: path("M9.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 13.5v-4c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4v4");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="xd-io5bwb"/></g>`,
		"fallback": "uix-sharp:progress-photo",
	});
}

export default Component;
