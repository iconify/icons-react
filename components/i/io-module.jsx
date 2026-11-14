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
		"content": `<style>.f3anvhbxq {
  d: path("M8.75 10.25L10.5 12l-1.75 1.75M13.5 12h8m-1.75-1.75L21.5 12l-1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpgpyib4r {
  d: path("M5.5 3.5H17v17H5.5Zm-3 8.5h8");
}
</style><g class="ulnmmdpxh"><path class="wpgpyib4r"/><path class="f3anvhbxq"/></g>`,
		"fallback": "uix-sharp:io-module",
	});
}

export default Component;
