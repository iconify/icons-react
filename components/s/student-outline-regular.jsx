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
		"content": `<style>.j9kdj-bfk {
  d: path("m4 7 3 -3h10l3 3 -3 3H7Z");
}

.ke4ug0b-p {
  d: path("M7.5 21a4.5 4.5 0 0 1 9 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zoz5ar7wf {
  d: path("M9 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="j9kdj-bfk"/><path class="zoz5ar7wf"/><path class="ke4ug0b-p"/></g>`,
		"fallback": "iconmind:student-outline-regular",
	});
}

export default Component;
