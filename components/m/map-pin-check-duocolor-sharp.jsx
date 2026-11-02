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

.pmsjm7ivf {
  d: path("M12 21c-3-2-7-6-7-11a7 7 0 0 1 14 0c0 5-4 9-7 11");
}

.vu_mukbdk {
  stroke-opacity: 0.4;
  d: path("m9 10l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="vu_mukbdk"/><path class="pmsjm7ivf"/></g>`,
		"fallback": "coolicons:map-pin-check-duocolor-sharp",
	});
}

export default Component;
