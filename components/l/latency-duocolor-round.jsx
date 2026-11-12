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
		"content": `<style>.e0ql9gxfh {
  stroke-opacity: 0.4;
  d: path("M8 14h2l1-3l2 6l1-3h2");
}

.m4ef2-b8e {
  d: path("M5 14a7 7 0 1 0 14 0a7 7 0 0 0-14 0M9 3h6m-3 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e0ql9gxfh"/><path class="m4ef2-b8e"/></g>`,
		"fallback": "coolicons:latency-duocolor-round",
	});
}

export default Component;
