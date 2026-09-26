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
		"content": `<style>.abrdwn46r {
  d: path("M5 5V19");
}

.m0c3q_bwj {
  fill: currentColor;
  d: path("M20 16.994101C20 19.596298 16.91367 20.964488 14.985461 19.217079L8.656973 13.481985C7.781008 12.688156 7.781008 11.311844 8.656973 10.518015L14.985461 4.782921C16.91367 3.035512 20 4.403702 20 7.005899Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m0c3q_bwj"/><path class="abrdwn46r"/></g>`,
		"fallback": "keyline-icons:skip-back-fill",
	});
}

export default Component;
