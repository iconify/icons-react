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
		"content": `<style>.klqk1dbml {
  d: path("M8.5 5.75H13v12.5H8.5zm-2.75 12.5h10v3h-10z");
}

.vscmrqbpo {
  d: path("M8.5 9.75h-4v2m6.25-6v-2.5m2 4l8-3.75M4.5 13l1.6 2.036V16a1.6 1.6 0 0 1-3.2 0v-.964z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="klqk1dbml"/><path class="vscmrqbpo"/></g>`,
		"fallback": "iconoven:water-pump-farm-sharp",
	});
}

export default Component;
