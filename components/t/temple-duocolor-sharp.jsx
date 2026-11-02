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
		"content": `<style>.ce59h9myo {
  stroke-opacity: 0.4;
  d: path("M10 21v-3a2 2 0 1 1 4 0v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u1arpjfde {
  d: path("M3 21h7m4 0h7M6 12h12a3 3 0 0 0 3-3c-5 0-8-3-9-6c-1 3-4 6-9 6a3 3 0 0 0 3 3m0 9v-9m12 9v-9");
}
</style><g class="nrj6p8qat"><path class="ce59h9myo"/><path class="u1arpjfde"/></g>`,
		"fallback": "coolicons:temple-duocolor-sharp",
	});
}

export default Component;
