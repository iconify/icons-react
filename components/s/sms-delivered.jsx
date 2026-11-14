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
		"content": `<style>.bb06kc7-w {
  d: path("M6 16.25A8.5 7.5 0 1 1 9 18l-5.5 2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it2xttbfu {
  d: path("m8 11l3 3l5-5");
}
</style><g class="hntgybcog"><path class="bb06kc7-w"/><path class="it2xttbfu"/></g>`,
		"fallback": "uix:sms-delivered",
	});
}

export default Component;
