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
		"content": `<style>.mynxxlt_u {
  d: path("M7 5.5h10a4.5 4.5 0 0 1 4.5 4.5v4a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 14v-4A4.5 4.5 0 0 1 7 5.5Z");
}

.td82nc1kd {
  d: path("M7 8.75h10A1.25 1.25 0 0 1 18.25 10v4A1.25 1.25 0 0 1 17 15.25H7A1.25 1.25 0 0 1 5.75 14v-4A1.25 1.25 0 0 1 7 8.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mynxxlt_u"/><path class="td82nc1kd"/></g>`,
		"fallback": "uix-sharp:speed-skating-oval",
	});
}

export default Component;
