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
		"content": `<style>.jml6qybah {
  d: path("M4 4h4M4 20h4M6 4v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.witldvb0m {
  stroke-opacity: 0.4;
  d: path("M15 7c0 3 2 5 5 5c-3 0-5 2-5 5c0-3-2-5-5-5c3 0 5-2 5-5");
}
</style><g class="nrj6p8qat"><path class="witldvb0m"/><path class="jml6qybah"/></g>`,
		"fallback": "coolicons:prompt-duocolor",
	});
}

export default Component;
