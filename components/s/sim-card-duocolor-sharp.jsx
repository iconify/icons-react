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
		"content": `<style>.dufnb_byj {
  d: path("M5 3h10l4 4v14H5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8-pf9_0v {
  stroke-opacity: 0.4;
  d: path("M9 9h6v8H9Zm0 4h6");
}
</style><g class="nrj6p8qat"><path class="q8-pf9_0v"/><path class="dufnb_byj"/></g>`,
		"fallback": "coolicons:sim-card-duocolor-sharp",
	});
}

export default Component;
