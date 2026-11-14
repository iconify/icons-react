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
		"content": `<style>.alwv8wwat {
  d: path("M21.5 20H3C6.5 20 7.5 5 14.5 5c3.75 0 6.25 2.5 5.75 5.5c-.5 2.5-3.5 2.75-4.25.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu7t4-bbb {
  d: path("M10 20c1-4.5 2.5-8 4.5-9.5");
}
</style><g class="ulnmmdpxh"><path class="alwv8wwat"/><path class="yu7t4-bbb"/></g>`,
		"fallback": "uix-sharp:wave-big",
	});
}

export default Component;
