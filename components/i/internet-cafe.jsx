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
		"content": `<style>.tqvqwlvwx {
  d: path("M7 11h10v5.5H7Zm5 5.5v1.75m-2.5 0h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5bcdvbpf {
  d: path("M3.5 10L12 3l8.5 7v11h-17Z");
}
</style><g class="ulnmmdpxh"><path class="v5bcdvbpf"/><path class="tqvqwlvwx"/></g>`,
		"fallback": "uix-sharp:internet-cafe",
	});
}

export default Component;
