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
		"content": `<style>.b3i39ombu {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H20M9 12c3 0 3-7 6-7h5M9 12c3 0 3 7 6 7h5");
}

.etatracfm {
  d: path("m18 3l2 2l-2 2m0 3l2 2l-2 2m0 3l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b3i39ombu"/><path class="etatracfm"/></g>`,
		"fallback": "uix-sharp:switch-case",
	});
}

export default Component;
