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

.k8s7txbqy {
  d: path("M7.25 5.5h3v3h-3Zm6.5 0h3v3h-3Zm-6.5 5.75h3v3h-3Zm6.5 0h3v3h-3ZM10 21.5v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="k8s7txbqy"/></g>`,
		"fallback": "uix-sharp:ministry",
	});
}

export default Component;
