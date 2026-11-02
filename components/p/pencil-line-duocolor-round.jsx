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
		"content": `<style>.hvuoh6b3h {
  stroke-opacity: 0.4;
  d: path("M8 20h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vww7afv6l {
  d: path("M4 20v-4L14 6a2.828 2.828 0 1 1 4 4L8 20zm8-12l4 4");
}
</style><g class="nrj6p8qat"><path class="hvuoh6b3h"/><path class="vww7afv6l"/></g>`,
		"fallback": "coolicons:pencil-line-duocolor-round",
	});
}

export default Component;
