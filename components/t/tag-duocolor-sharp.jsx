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
		"content": `<style>.a-7__ob0f {
  stroke-opacity: 0.4;
  d: path("M8 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o9ouznb3y {
  d: path("M8 4h4l8 8l-8 8l-8-8V4z");
}
</style><g class="nrj6p8qat"><path class="a-7__ob0f"/><path class="o9ouznb3y"/></g>`,
		"fallback": "coolicons:tag-duocolor-sharp",
	});
}

export default Component;
