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
		"content": `<style>.nopfk0w4w {
  d: path("m8 10l6 6l-2 2H6v-6z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.quhf9pj8o {
  stroke-opacity: 0.4;
  d: path("m11 13l6-6m-2-2l4 4");
}
</style><g class="nrj6p8qat"><path class="quhf9pj8o"/><path class="nopfk0w4w"/></g>`,
		"fallback": "coolicons:shovel-duocolor-sharp",
	});
}

export default Component;
