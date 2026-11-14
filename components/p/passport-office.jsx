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
		"content": `<style>.b7f3oybur {
  d: path("M11.25 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm0 6h5.5m-5.5 3.5H15");
}

.rpemyd38k {
  d: path("M4.5 2.5h15v19h-15Zm3.5 0v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rpemyd38k"/><path class="b7f3oybur"/></g>`,
		"fallback": "uix-sharp:passport-office",
	});
}

export default Component;
