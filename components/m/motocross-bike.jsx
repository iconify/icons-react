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
		"content": `<style>.nteeebc3v {
  d: path("M2.5 15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.q185mo-6n {
  d: path("m6 15l4-5h6.75M18 15l-2.25-9h-2m2.75 3l5 .5M7 7h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nteeebc3v"/><path class="q185mo-6n"/></g>`,
		"fallback": "uix-sharp:motocross-bike",
	});
}

export default Component;
