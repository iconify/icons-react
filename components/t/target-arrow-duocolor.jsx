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
		"content": `<style>.ivk6cei0x {
  d: path("M21 12a9 9 0 1 1-9-9m5 9a5 5 0 1 1-5-5");
}

.n57he_b_m {
  stroke-opacity: 0.4;
  d: path("m12 12l9-9m-4 0v4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n57he_b_m"/><path class="ivk6cei0x"/></g>`,
		"fallback": "coolicons:target-arrow-duocolor",
	});
}

export default Component;
