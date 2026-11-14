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
		"content": `<style>.e8bo12bdv {
  d: path("M9.75 17.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8.25 10H21.5m-19-2h3m-3 5h3");
}

.ld2v7gb1h {
  d: path("M8.25 16V6a2 2 0 0 1 2-2h9.25a2 2 0 0 1 2 2v10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ld2v7gb1h"/><path class="e8bo12bdv"/></g>`,
		"fallback": "uix-sharp:map-layer-transit",
	});
}

export default Component;
