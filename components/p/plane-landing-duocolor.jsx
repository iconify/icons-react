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

.obqscbcxp {
  stroke-opacity: 0.4;
  d: path("M3 21h18");
}

.pf1xygb8s {
  d: path("m17 12l-2-2l.915-5.492a1 1 0 0 0-.279-.872L15.5 3.5a.613.613 0 0 0-.924.066L12 7l-2-1V4.414a1 1 0 0 0-.293-.707L9.5 3.5a.707.707 0 0 0-1 0l-3 3a.707.707 0 0 0 0 1l.207.207A1 1 0 0 0 6.414 8H8l1 2l-3.434 2.576a.613.613 0 0 0-.066.924l.136.136a1 1 0 0 0 .872.28L12 13l2 2c2 2 3 2 4 1s1-2-1-4");
}
</style><g class="nrj6p8qat"><path class="obqscbcxp"/><path class="pf1xygb8s"/></g>`,
		"fallback": "coolicons:plane-landing-duocolor",
	});
}

export default Component;
