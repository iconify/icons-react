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
		"content": `<style>.lh5e45b2c {
  stroke-opacity: 0.4;
  d: path("m20 7l-3 5h4l-3 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-hvxfbfx {
  d: path("M8 7h1a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4zM6 3v4m4-4v4M8 17v4");
}
</style><g class="nrj6p8qat"><path class="lh5e45b2c"/><path class="x-hvxfbfx"/></g>`,
		"fallback": "coolicons:plug-zap-duocolor-round",
	});
}

export default Component;
