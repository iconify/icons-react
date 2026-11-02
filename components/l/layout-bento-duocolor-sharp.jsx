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
		"content": `<style>.j11k5wbyq {
  d: path("M4 4h6v16H4Zm10 10h6v6h-6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tota1lyqq {
  stroke-opacity: 0.4;
  d: path("M14 4h6v6h-6Z");
}
</style><g class="nrj6p8qat"><path class="tota1lyqq"/><path class="j11k5wbyq"/></g>`,
		"fallback": "coolicons:layout-bento-duocolor-sharp",
	});
}

export default Component;
