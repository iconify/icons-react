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
		"content": `<style>.j-wxgjbtz {
  d: path("M9 17a3 3 0 0 1 6 0M3 17h2m14 0h2M3 21h18M5 10l2 2m12-2l-2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wv693ghkj {
  stroke-opacity: 0.4;
  d: path("m15 6l-3-3l-3 3m3-3v7");
}
</style><g class="nrj6p8qat"><path class="wv693ghkj"/><path class="j-wxgjbtz"/></g>`,
		"fallback": "coolicons:sunrise-duocolor",
	});
}

export default Component;
