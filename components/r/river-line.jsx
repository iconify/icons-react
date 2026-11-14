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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr05u96_r {
  d: path("M4.5 21.5c0-6 9-6.5 9-12c0-3.5-3-5-3-7");
}

.z9fvtcc0q {
  d: path("M10.5 21.5c0-4 9-4.5 9-12c0-4.5-3-5-3-7");
}
</style><g class="hntgybcog"><path class="nr05u96_r"/><path class="z9fvtcc0q"/></g>`,
		"fallback": "uix:river-line",
	});
}

export default Component;
