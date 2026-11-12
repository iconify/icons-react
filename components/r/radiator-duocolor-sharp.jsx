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
		"content": `<style>.l0yu7ebpb {
  stroke-opacity: 0.4;
  d: path("M3 8h16M5 16h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0j1czo7j {
  d: path("M4 3h2v18H4Zm7 0h2v18h-2Zm7 0h2v18h-2Z");
}
</style><g class="nrj6p8qat"><path class="l0yu7ebpb"/><path class="r0j1czo7j"/></g>`,
		"fallback": "coolicons:radiator-duocolor-sharp",
	});
}

export default Component;
