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

.v53y8k-5s {
  fill: currentColor;
  d: path("M23 12.9922L23 14C23 16.2092 21.2092 18 19 18L5 18C2.7908 18 1 16.2092 1 14L1 6C1 3.7908 2.7908 2 5 2L13 2.0001L12.0001 2.0001C12.5493 2.0001 12.9957 2.443 13 2.9922L13 10C13 11.1046 13.8954 12 15 12L23 12.0001L22.012 12.0001C22.5565 12.0066 22.9957 12.4477 23 12.9922Z");
  stroke: none;
}

.ypqkf7beg {
  d: path("M12 17L12 21M8 21L16 21M16 3L21.4994 3C21.7756 3 22 3.2239 22 3.5L22 9M17 8L21.5 3.5");
}
</style><g class="nrj6p8qat"><path class="v53y8k-5s"/><path class="ypqkf7beg"/></g>`,
		"fallback": "keyline-icons:monitor-2-arrow-in-up-right-fill",
	});
}

export default Component;
