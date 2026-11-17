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
		"content": `<style>.ac-jvqbeo {
  d: path("M3 17a4 4 0 1 1 8 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sm-xfbcsk {
  stroke-opacity: 0.4;
  d: path("M7 13V8c0-4 6-5 7-2l5 15m-3 0h5");
}
</style><g class="nrj6p8qat"><path class="sm-xfbcsk"/><path class="ac-jvqbeo"/></g>`,
		"fallback": "coolicons:vacuum-cleaner-duocolor",
	});
}

export default Component;
