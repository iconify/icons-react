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
		"content": `<style>.dukgchbwq {
  stroke-opacity: 0.4;
  d: path("M13 7L9 3L3 9l4 4m10-2l4 4l-6 6l-4-4");
}

.iob2sxbnt {
  d: path("M4 16L16 4l4 4L8 20m0 0H4v-4m7-11L9 7m10 6l-2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dukgchbwq"/><path class="iob2sxbnt"/></g>`,
		"fallback": "coolicons:pencil-ruler-duocolor-sharp",
	});
}

export default Component;
