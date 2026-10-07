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

.nuuzvbbgc {
  fill: currentColor;
  d: path("M1 5C1 3.8954 1.8954 3 3 3L7 3C8.1046 3 9 3.8954 9 5L9 9C9 10.1046 8.1046 11 7 11L3 11C1.8954 11 1 10.1046 1 9L1 5Z");
  stroke: none;
}

.wvltndbcs {
  d: path("M12 7L22 7M12 18L22 18M2 18L4 20L8 16");
}
</style><g class="nrj6p8qat"><path class="nuuzvbbgc"/><path class="wvltndbcs"/></g>`,
		"fallback": "keyline-icons:list-todo-fill",
	});
}

export default Component;
