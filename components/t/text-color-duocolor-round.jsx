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

.tiw-5jboz {
  stroke-opacity: 0.4;
  d: path("M4 20h16");
}

.xscvtn6oj {
  d: path("m8 16l4-12l4 12m-6-4h4");
}
</style><g class="nrj6p8qat"><path class="tiw-5jboz"/><path class="xscvtn6oj"/></g>`,
		"fallback": "coolicons:text-color-duocolor-round",
	});
}

export default Component;
