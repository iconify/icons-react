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
		"content": `<style>.mti0imbma {
  d: path("M19.5 14.25L21.25 16l-1.75 1.75");
}

.qpqxkcb6k {
  d: path("M2.5 2.5h13V7h-13Zm0 6.75h13v4.5h-13Zm0 6.75H12v4.5H2.5Zm3-11.25h3m-3 6.75h3m-3 6.75H8m7.25 3.25V19a3 3 0 0 1 3-3h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpqxkcb6k"/><path class="mti0imbma"/></g>`,
		"fallback": "uix-sharp:pivot-fields",
	});
}

export default Component;
