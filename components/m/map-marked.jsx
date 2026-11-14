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
		"content": `<style>.o9ytzybgw {
  d: path("M18 21.5S15 19 15 17a3 3 0 0 1 6 0c0 2-3 4.5-3 4.5Zm0-4.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw7ap1b9u {
  d: path("m3 6l6-2.5L15 6l6-2.5v8.75h-6.75l-2 2v5L9 18l-6 2.5Zm6-2.5V18m6-12v3.5");
}
</style><g class="ulnmmdpxh"><path class="zw7ap1b9u"/><path class="o9ytzybgw"/></g>`,
		"fallback": "uix-sharp:map-marked",
	});
}

export default Component;
