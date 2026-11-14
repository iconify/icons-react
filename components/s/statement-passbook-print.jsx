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
		"content": `<style>.wcikbixnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5V4A1.5 1.5 0 0 1 8 2.5h8A1.5 1.5 0 0 1 17.5 4v5.5m-15 2h19v8h-19Zm3.5 10h12m-8.25-19v7m7.75 6h.01");
}
</style><path class="wcikbixnj"/>`,
		"fallback": "uix-sharp:statement-passbook-print",
	});
}

export default Component;
