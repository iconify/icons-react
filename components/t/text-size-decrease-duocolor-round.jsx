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
		"content": `<style>.h4f42dbzz {
  stroke-opacity: 0.4;
  d: path("M15 12h6");
}

.im48wz0-s {
  d: path("M3 5h10M8 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h4f42dbzz"/><path class="im48wz0-s"/></g>`,
		"fallback": "coolicons:text-size-decrease-duocolor-round",
	});
}

export default Component;
