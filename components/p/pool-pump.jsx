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
		"content": `<style>.cbib95b3k {
  d: path("M3.5 12a6 1.75 0 0 1 12 0v7.5a6 1.75 0 0 1-12 0Z");
}

.j6e14gbvt {
  d: path("M5 4h9v6.25H5Zm10.5 11.5H20m0-2v4m-16.5-2a6 1.75 0 0 0 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cbib95b3k"/><path class="j6e14gbvt"/></g>`,
		"fallback": "uix-sharp:pool-pump",
	});
}

export default Component;
