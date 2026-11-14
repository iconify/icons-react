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
		"content": `<style>.csg0wlbjc {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0ZM5.5 9.5v5m13-5v5M7.25 12h9.5");
}

.i66aruydi {
  d: path("M9.5 9.75L7.25 12l2.25 2.25m5-4.5L16.75 12l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="csg0wlbjc"/><path class="i66aruydi"/></g>`,
		"fallback": "uix-sharp:length-limit-sign",
	});
}

export default Component;
