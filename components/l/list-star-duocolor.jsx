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
		"content": `<style>.jg6nfytql {
  d: path("M15 7h6M3 15h18M3 21h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ts0u9pb0c {
  stroke-opacity: 0.4;
  d: path("m7 3.4l1.2 2.4l2.8.4l-2 2l.4 2.4L7 9.4l-2.4 1.2l.4-2.4l-2-2l2.8-.4Z");
}
</style><g class="nrj6p8qat"><path class="ts0u9pb0c"/><path class="jg6nfytql"/></g>`,
		"fallback": "coolicons:list-star-duocolor",
	});
}

export default Component;
