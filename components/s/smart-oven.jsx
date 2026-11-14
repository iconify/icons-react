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
		"content": `<style>.amlyzkv3h {
  d: path("M13.7 13.75H5.5v-3h9v2.5M14 17a5.66 5.66 0 0 1 8 0m-6 2a2.83 2.83 0 0 1 4 0m-2 2h.01");
}

.mzh474csl {
  d: path("M10.6 17.5H2.5V3h15v9.6M2.5 8h15m-6-2.5h.01m2.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mzh474csl"/><path class="amlyzkv3h"/></g>`,
		"fallback": "uix-sharp:smart-oven",
	});
}

export default Component;
