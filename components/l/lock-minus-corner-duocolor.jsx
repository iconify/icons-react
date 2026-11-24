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

.ns2fljdev {
  d: path("M11 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 9V7a4 4 0 1 1 8 0v2");
}

.tk5lf8bih {
  stroke-opacity: 0.4;
  d: path("M15 17h6");
}
</style><g class="nrj6p8qat"><path class="tk5lf8bih"/><path class="ns2fljdev"/></g>`,
		"fallback": "coolicons:lock-minus-corner-duocolor",
	});
}

export default Component;
