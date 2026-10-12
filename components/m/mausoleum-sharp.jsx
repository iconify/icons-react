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
		"content": `<style>.hci_8kh1k {
  d: path("M7.5 9.75a4.5 4.5 0 0 1 9 0Zm4.5-4.5v-2.5m-9.25 18v-2H4.5V17h1V9.75h13V17h1v1.75h1.75v2.5H2.75z");
}

.pibz1d67m {
  d: path("M10 17v-4.75h4V17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hci_8kh1k"/><path class="pibz1d67m"/></g>`,
		"fallback": "iconoven:mausoleum-sharp",
	});
}

export default Component;
