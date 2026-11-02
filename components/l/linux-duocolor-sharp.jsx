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
		"content": `<style>.c2a0lzbas {
  d: path("M10 9h.01M14 9h.01M10 12h4l-2 2Zm-2 9c0-2 2-4 4-4s4 2 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x_k76gstu {
  stroke-opacity: 0.4;
  d: path("M3 21c1-2 3-5 3-9V9a6 6 0 1 1 12 0v3c0 4 2 7 3 9");
}
</style><g class="nrj6p8qat"><path class="x_k76gstu"/><path class="c2a0lzbas"/></g>`,
		"fallback": "coolicons:linux-duocolor-sharp",
	});
}

export default Component;
