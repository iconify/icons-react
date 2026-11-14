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
		"content": `<style>.d4yof8bkc {
  fill: currentColor;
  d: path("M4.5 17h15v2.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z");
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

.x1-iybcbx {
  d: path("M8 7h8m-8 4h5");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="d4yof8bkc"/><path class="x1-iybcbx"/></g>`,
		"fallback": "uix-sharp:site-footer",
	});
}

export default Component;
