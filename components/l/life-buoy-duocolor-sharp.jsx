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

.ttv-p3bie {
  stroke-opacity: 0.4;
  d: path("m6 6l3 3m9-3l-3 3m3 9l-3-3m-9 3l3-3");
}

.wwcz9bcnj {
  d: path("M6 6a8.485 8.485 0 1 1 12 12A8.485 8.485 0 0 1 6 6m3 3a4.243 4.243 0 1 1 6 6a4.243 4.243 0 0 1-6-6");
}
</style><g class="nrj6p8qat"><path class="ttv-p3bie"/><path class="wwcz9bcnj"/></g>`,
		"fallback": "coolicons:life-buoy-duocolor-sharp",
	});
}

export default Component;
