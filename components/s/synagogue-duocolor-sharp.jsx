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

.uc7i5acyb {
  d: path("M4 21V8l8-4l8 4v13z");
}

.wbmm5u2vb {
  stroke-opacity: 0.4;
  d: path("m12 9l3.464 6H8.536Zm0 8l3.464-6H8.536Z");
}
</style><g class="nrj6p8qat"><path class="wbmm5u2vb"/><path class="uc7i5acyb"/></g>`,
		"fallback": "coolicons:synagogue-duocolor-sharp",
	});
}

export default Component;
