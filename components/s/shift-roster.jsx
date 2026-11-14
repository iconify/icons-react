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
		"content": `<style>.amj7jzbrf {
  fill: currentColor;
  d: path("M5.75 11.75h6v2.5h-6Zm5.25 4.5h7.25v2.5H11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrnyspajr {
  d: path("M3 4.5h18v17H3ZM3 9h18M8 2.5V6m8-3.5V6");
}
</style><g class="ulnmmdpxh"><path class="vrnyspajr"/><path class="amj7jzbrf"/></g>`,
		"fallback": "uix-sharp:shift-roster",
	});
}

export default Component;
