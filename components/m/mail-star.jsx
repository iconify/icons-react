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
		"content": `<style>.f9d2_wk5j {
  d: path("M10.5 16.5h-8v-13h18v9.8");
}

.tcm0inflp {
  d: path("m2.5 6l9 5.5l9-5.5m-2.75 8l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f9d2_wk5j"/><path class="tcm0inflp"/></g>`,
		"fallback": "uix-sharp:mail-star",
	});
}

export default Component;
