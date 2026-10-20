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
		"content": `<style>.jwuruxbqn {
  d: path("M12 17L12 21M8 21L16 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q_0dzacoa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 2L19 2C21.2092 2 23 3.7908 23 6L23 14C23 16.2092 21.2092 18 19 18L5 18C2.7908 18 1 16.2092 1 14L1 6C1 3.7908 2.7908 2 5 2ZM10 6C8.8954 6 8 6.8954 8 8L8 12C8 13.1046 8.8954 14 10 14L14 14C15.1046 14 16 13.1046 16 12L16 8C16 6.8954 15.1046 6 14 6L10 6Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="q_0dzacoa"/><path class="jwuruxbqn"/></g>`,
		"fallback": "keyline-icons:monitor-2-stop-fill",
	});
}

export default Component;
