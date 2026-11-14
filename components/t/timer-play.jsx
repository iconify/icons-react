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
		"content": `<style>.h0yojpbyp {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM9.5 2.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-sjymkps {
  d: path("M10.25 9.75L15.5 13l-5.25 3.25Z");
}
</style><g class="ulnmmdpxh"><path class="h0yojpbyp"/><path class="x-sjymkps"/></g>`,
		"fallback": "uix-sharp:timer-play",
	});
}

export default Component;
