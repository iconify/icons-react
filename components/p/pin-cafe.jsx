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
		"content": `<style>.b3anb2b2e {
  d: path("m9.5 19.5l-5-7a6.25 6.25 0 1 1 10 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kplvq9bpw {
  d: path("M7.25 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7.5 8.25h4.75v2.5a2.25 2.25 0 0 1-2.25 2.25H17a2.25 2.25 0 0 1-2.25-2.25Zm4.75.75h.5a1.5 1.5 0 0 1 0 3h-.5");
}
</style><g class="hntgybcog"><path class="b3anb2b2e"/><path class="kplvq9bpw"/></g>`,
		"fallback": "uix:pin-cafe",
	});
}

export default Component;
