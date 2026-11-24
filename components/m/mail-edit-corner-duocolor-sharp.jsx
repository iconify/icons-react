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

.nx4e6--5o {
  stroke-opacity: 0.4;
  d: path("M14 21v-3l4-4l3 3l-4 4Z");
}

.z3ee-ypiu {
  d: path("M10 19H3V5h18v6M3 5l6 6h6l6-6");
}
</style><g class="nrj6p8qat"><path class="nx4e6--5o"/><path class="z3ee-ypiu"/></g>`,
		"fallback": "coolicons:mail-edit-corner-duocolor-sharp",
	});
}

export default Component;
