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
		"content": `<style>.exwy27v-l {
  d: path("M2.75 18a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm13 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-7.5 0h7.5m2.75 0L16 7m-1.75 0h3.5M2.5 4.5h9v8h-9Z");
}

.g5vh6wcqp {
  d: path("M5 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="exwy27v-l"/><path class="g5vh6wcqp"/></g>`,
		"fallback": "uix-sharp:remit-home-delivery",
	});
}

export default Component;
