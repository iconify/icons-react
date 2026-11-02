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
		"content": `<style>.lw6t35brr {
  d: path("M4 4h16v16H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.upiwdxonc {
  stroke-opacity: 0.4;
  d: path("M15 4v16");
}
</style><g class="nrj6p8qat"><path class="upiwdxonc"/><path class="lw6t35brr"/></g>`,
		"fallback": "coolicons:panel-right-duocolor-sharp",
	});
}

export default Component;
