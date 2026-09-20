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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wihdixnjz {
  d: path("M14 9v6");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="c1si20bso"/><path class="wihdixnjz"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:subresource-integrity-outline-bold",
	});
}

export default Component;
