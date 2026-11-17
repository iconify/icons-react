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
		"content": `<style>.dvho1cbbx {
  d: path("M9 3h6l4 4v14H5V7zm2 3h2");
}

.j4tcei25e {
  stroke-opacity: 0.4;
  d: path("m12 9.9l1.2 2.4l2.8.4l-2 2l.4 2.4l-2.4-1.2l-2.4 1.2l.4-2.4l-2-2l2.8-.4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="j4tcei25e"/><path class="dvho1cbbx"/></g>`,
		"fallback": "coolicons:tag-star-duocolor-sharp",
	});
}

export default Component;
