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

.qaia1d1wv {
  d: path("m2 12 6 -6 3 3 5 -5 5 5");
}

.wt9iv5biz {
  d: path("m2 19 6 -6 3 3 5 -5 5 5");
}
</style><g class="nrj6p8qat"><path class="qaia1d1wv"/><path class="wt9iv5biz"/></g>`,
		"fallback": "iconmind:terrain-outline-regular",
	});
}

export default Component;
