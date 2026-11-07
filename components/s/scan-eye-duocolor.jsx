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

.p_qogjuvx {
  d: path("M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2");
}

.za0qmvb7p {
  stroke-opacity: 0.4;
  d: path("M5 12c4-6 10-6 14 0c-4 6-10 6-14 0m7 0h.01");
}
</style><g class="nrj6p8qat"><path class="za0qmvb7p"/><path class="p_qogjuvx"/></g>`,
		"fallback": "coolicons:scan-eye-duocolor",
	});
}

export default Component;
