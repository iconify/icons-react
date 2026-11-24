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
		"content": `<style>.cr709fn9c {
  stroke-opacity: 0.4;
  d: path("m10 13l4 4m0-4l-4 4");
}

.kskc15b9j {
  d: path("M4 9h16v12H4Zm4 0V7a4 4 0 1 1 8 0v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cr709fn9c"/><path class="kskc15b9j"/></g>`,
		"fallback": "coolicons:lock-close-duocolor-sharp",
	});
}

export default Component;
