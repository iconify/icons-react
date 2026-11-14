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
		"content": `<style>.ca0vv5bxe {
  d: path("M14 7c-.5-.75-1.25-1-2-1c-1.25 0-2 .75-2 1.75c0 2.25 4 1.5 4 4c0 1-.75 1.75-2 1.75c-1 0-1.75-.5-2-1.25m2-7.75V15m-4 3h8");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="ca0vv5bxe"/></g>`,
		"fallback": "uix-sharp:medical-bill",
	});
}

export default Component;
