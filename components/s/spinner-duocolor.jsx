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
		"content": `<style>.bo69k3bvm {
  d: path("M21 12a9 9 0 0 1-18 0");
}

.iw-m9zbcy {
  stroke-opacity: 0.4;
  d: path("M3 12a9 9 0 0 1 9-9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iw-m9zbcy"/><path class="bo69k3bvm"/></g>`,
		"fallback": "coolicons:spinner-duocolor",
	});
}

export default Component;
