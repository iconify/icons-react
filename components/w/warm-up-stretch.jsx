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
		"content": `<style>.i1qxrtbqn {
  d: path("m4 8l8 2.5L20 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zn-rudbel {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 4V14l-5 7m5-7l5 7");
}
</style><g class="ulnmmdpxh"><path class="zn-rudbel"/><path class="i1qxrtbqn"/></g>`,
		"fallback": "uix-sharp:warm-up-stretch",
	});
}

export default Component;
