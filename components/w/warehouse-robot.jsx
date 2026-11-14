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
		"content": `<style>.h05rvwb-u {
  d: path("M6 9h12v9H6Zm6 0V5.5m0-1h.01");
}

.nlx1v7bjk {
  d: path("M8.5 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM7 20a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm7 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h05rvwb-u"/><path class="nlx1v7bjk"/></g>`,
		"fallback": "uix-sharp:warehouse-robot",
	});
}

export default Component;
