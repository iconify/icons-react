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
		"content": `<style>.gizcrpbsx {
  d: path("M16.5 11v2.5L5.5 10l3 11.5m-5 0h10M14 6.75h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tb1mfpluh {
  d: path("M16.5 2.5zA2.5 2.5 0 0 1 19 5v3.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 14 8.5V5a2.5 2.5 0 0 1 2.5-2.5");
}
</style><g class="hntgybcog"><path class="tb1mfpluh"/><path class="gizcrpbsx"/></g>`,
		"fallback": "uix:mic-arm",
	});
}

export default Component;
