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

.qj6kks61g {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-1.5 12v-2c0-2 2-4 4.5-4s4.5 2 4.5 4v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="qj6kks61g"/></g>`,
		"fallback": "uix-sharp:portrait-mode",
	});
}

export default Component;
