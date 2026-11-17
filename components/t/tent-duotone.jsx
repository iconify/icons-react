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
		"content": `<style>.blyjujmyc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3L5 21m5-18l9 18M3 21h18m-11 0l2-5l2 5");
}

.ft5dv1b6b {
  fill: none;
}

.lpqmqnbzp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 21H5l7-14Z");
}
</style><g class="ft5dv1b6b"><path class="lpqmqnbzp"/><path class="blyjujmyc"/></g>`,
		"fallback": "coolicons:tent-duotone",
	});
}

export default Component;
