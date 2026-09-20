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
		"content": `<style>.ai9jip1qe {
  d: path("M8.5 12a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2");
}

.li5x4yeoz {
  d: path("M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="li5x4yeoz"/><path class="ai9jip1qe"/></g>`,
		"fallback": "iconmind:parent-chunk-outline-regular",
	});
}

export default Component;
