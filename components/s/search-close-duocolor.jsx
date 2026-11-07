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

.v_y2_ka1u {
  stroke-opacity: 0.4;
  d: path("m8 8l4 4m0-4l-4 4");
}

.vy7vn8b1q {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0m12 5l6 6");
}
</style><g class="nrj6p8qat"><path class="v_y2_ka1u"/><path class="vy7vn8b1q"/></g>`,
		"fallback": "coolicons:search-close-duocolor",
	});
}

export default Component;
