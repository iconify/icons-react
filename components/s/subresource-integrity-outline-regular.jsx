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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.c1si20bso {
  d: path("M10 9v6");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wihdixnjz {
  d: path("M14 9v6");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="c1si20bso"/><path class="wihdixnjz"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:subresource-integrity-outline-regular",
	});
}

export default Component;
