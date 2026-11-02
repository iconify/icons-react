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
		"content": `<style>.lz692cbkn {
  stroke-opacity: 0.4;
  d: path("M9 12h6");
}

.not0lxbjm {
  d: path("M9 3v15a3 3 0 0 0 6 0V3M7 3h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lz692cbkn"/><path class="not0lxbjm"/></g>`,
		"fallback": "coolicons:test-tube-duocolor-sharp",
	});
}

export default Component;
