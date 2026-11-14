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
		"content": `<style>.esjpohbje {
  d: path("M6.5 3.5h-3v17h3m11-17h3v17h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcx_nmbxn {
  fill: currentColor;
  d: path("M7 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="esjpohbje"/><path class="vcx_nmbxn"/></g>`,
		"fallback": "uix-sharp:spread-operator",
	});
}

export default Component;
