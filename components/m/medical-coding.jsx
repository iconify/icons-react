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
		"content": `<style>.cpscrt0jg {
  d: path("M6 7.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12.25 11l-1 5.5m4-6l-1 5.5M10 12.75h6.25M9.5 15h6.25");
}

.m0gxfb3hd {
  d: path("M3 3h8l10 10l-8 8L3 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m0gxfb3hd"/><path class="cpscrt0jg"/></g>`,
		"fallback": "uix-sharp:medical-coding",
	});
}

export default Component;
