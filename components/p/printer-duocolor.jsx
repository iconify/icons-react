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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vdd26lb5p {
  d: path("M6 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-8 4h4");
}

.x6t2qg18l {
  stroke-opacity: 0.4;
  d: path("M6 17a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="x6t2qg18l"/><path class="vdd26lb5p"/></g>`,
		"fallback": "coolicons:printer-duocolor",
	});
}

export default Component;
