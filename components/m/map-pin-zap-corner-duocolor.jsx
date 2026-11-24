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
		"content": `<style>.ncrpcqudc {
  d: path("M10 21c-3-2-7-6-7-11a7 7 0 0 1 13.982-.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sthjxky1p {
  stroke-opacity: 0.4;
  d: path("M8 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m11 4l-4 4h5l-4 4");
}
</style><g class="nrj6p8qat"><path class="sthjxky1p"/><path class="ncrpcqudc"/></g>`,
		"fallback": "coolicons:map-pin-zap-corner-duocolor",
	});
}

export default Component;
