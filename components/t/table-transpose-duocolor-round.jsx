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
		"content": `<style>.ev6r3bcvw {
  d: path("M11 5a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2m-8 8a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wj9xfdcvp {
  stroke-opacity: 0.4;
  d: path("M18 19h-4v-4m0 4l6-6");
}
</style><g class="nrj6p8qat"><path class="wj9xfdcvp"/><path class="ev6r3bcvw"/></g>`,
		"fallback": "coolicons:table-transpose-duocolor-round",
	});
}

export default Component;
