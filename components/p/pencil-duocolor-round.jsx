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

.p0zbmlb5w {
  d: path("M4 16L14 6a2.828 2.828 0 1 1 4 4L8 20m4-12l4 4");
}

.w-h6ynb5v {
  stroke-opacity: 0.4;
  d: path("M8 20H4v-4");
}
</style><g class="nrj6p8qat"><path class="w-h6ynb5v"/><path class="p0zbmlb5w"/></g>`,
		"fallback": "coolicons:pencil-duocolor-round",
	});
}

export default Component;
