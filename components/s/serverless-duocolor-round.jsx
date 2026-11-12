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
		"content": `<style>.dmxh33blm {
  d: path("M7 3C2 8 2 16 7 21M17 3c5 5 5 13 0 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yr8bb1b5m {
  stroke-opacity: 0.4;
  d: path("m14 6l-5 6h6l-5 6");
}
</style><g class="nrj6p8qat"><path class="yr8bb1b5m"/><path class="dmxh33blm"/></g>`,
		"fallback": "coolicons:serverless-duocolor-round",
	});
}

export default Component;
