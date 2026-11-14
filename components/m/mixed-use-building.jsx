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
		"content": `<style>.i88dahd8x {
  d: path("M4.5 12.75V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v8.75m-17 0h19v3h-19Zm2 3v5.75h15v-5.75m-11.25-3v3m3.75-3v3m3.75-3v3m-8-9.25H9m2.5 0h1m2.5 0h1.25m-8.5 3H9m2.5 0h1m2.5 0h1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyli5loxo {
  d: path("M10.5 21.5v-3h3v3");
}
</style><g class="ulnmmdpxh"><path class="i88dahd8x"/><path class="wyli5loxo"/></g>`,
		"fallback": "uix-sharp:mixed-use-building",
	});
}

export default Component;
