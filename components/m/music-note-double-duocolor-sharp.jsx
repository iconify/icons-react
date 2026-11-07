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

.x-le5iiml {
  d: path("M6 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0V4l6 3");
}

.xxlq3mw-f {
  stroke-opacity: 0.4;
  d: path("m12 9l4 2");
}
</style><g class="nrj6p8qat"><path class="xxlq3mw-f"/><path class="x-le5iiml"/></g>`,
		"fallback": "coolicons:music-note-double-duocolor-sharp",
	});
}

export default Component;
