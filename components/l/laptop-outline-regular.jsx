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
		"content": `<style>.ejc7sbawl {
  d: path("M20 15v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.othqh9bcz {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.s9zlrxyyc {
  d: path("M4 15v4");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="othqh9bcz"/><path class="z9ittvbis"/><path class="s9zlrxyyc"/><path class="ejc7sbawl"/></g>`,
		"fallback": "iconmind:laptop-outline-regular",
	});
}

export default Component;
