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

.og3vf3u0p {
  stroke-opacity: 0.4;
  d: path("m4 4l4 4m3 3h.01");
}

.wbl-5ymyb {
  d: path("m4 4l10 3l3 6l-4 4l-6-3Zm13 9l3 3l-4 4l-3-3");
}
</style><g class="nrj6p8qat"><path class="og3vf3u0p"/><path class="wbl-5ymyb"/></g>`,
		"fallback": "coolicons:pen-tool-duocolor-sharp",
	});
}

export default Component;
