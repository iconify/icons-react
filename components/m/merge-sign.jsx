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
		"content": `<style>.bt2bcabgo {
  d: path("m12 2.5l9.5 17h-19Zm0 6v8");
}

.d0h1ckbhm {
  d: path("M8.5 16.5V15c0-2 3.5-2.5 3.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bt2bcabgo"/><path class="d0h1ckbhm"/></g>`,
		"fallback": "uix-sharp:merge-sign",
	});
}

export default Component;
