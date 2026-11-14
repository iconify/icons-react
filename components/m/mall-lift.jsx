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
		"content": `<style>.f18_f1p2j {
  d: path("M5.5 2.5h13v19h-13Z");
}

.l86dd7b7h {
  d: path("M8.75 7.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm0 8.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.qyruf2d8s {
  d: path("M10.5 8.5L12 7l1.5 1.5m-3 7L12 17l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f18_f1p2j"/><path class="l86dd7b7h"/><path class="qyruf2d8s"/></g>`,
		"fallback": "uix-sharp:mall-lift",
	});
}

export default Component;
