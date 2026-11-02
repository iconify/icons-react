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

.ps0mh7bvo {
  d: path("M8 5v6a4 4 0 1 0 8 0V5");
}

.zaxhg3e5y {
  stroke-opacity: 0.4;
  d: path("M6 19h12");
}
</style><g class="nrj6p8qat"><path class="zaxhg3e5y"/><path class="ps0mh7bvo"/></g>`,
		"fallback": "coolicons:underline-duocolor-sharp",
	});
}

export default Component;
