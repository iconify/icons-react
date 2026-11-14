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
		"content": `<style>.glc9pkbtm {
  d: path("M6.25 16.5a5.75 5.75 0 0 1 11.5 0m-15.25 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpnq25_jo {
  d: path("M2.5 16.5a9.5 9.5 0 0 1 19 0");
}
</style><g class="hntgybcog"><path class="xpnq25_jo"/><path class="glc9pkbtm"/></g>`,
		"fallback": "uix:rainbow-double",
	});
}

export default Component;
