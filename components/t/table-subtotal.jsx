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
		"content": `<style>.nw3-gqk9b {
  d: path("M3 3h18v18H3Zm0 5h18M3 13h18M9 3v10m6-10v10");
}

.sm46k33lu {
  d: path("M11.5 15h-5L9 17l-2.5 2h5m2.5-2h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nw3-gqk9b"/><path class="sm46k33lu"/></g>`,
		"fallback": "uix-sharp:table-subtotal",
	});
}

export default Component;
