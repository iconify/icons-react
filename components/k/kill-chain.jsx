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
		"content": `<style>.dk7-ofbsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7h1q1 0 1.45.89l1.6 3.22q.45.89 0 1.78l-1.6 3.22q-.45.89-1.45.89h-1q-1 0-.55-.89l1.6-3.22q.45-.89 0-1.78L3.2 7.89Q2.75 7 3.75 7M10 7h1q1 0 1.45.89l1.6 3.22q.45.89 0 1.78l-1.6 3.22Q12 17 11 17h-1q-1 0-.55-.89l1.6-3.22q.45-.89 0-1.78l-1.6-3.22Q9 7 10 7m6.25 0h1q1 0 1.45.89l1.6 3.22q.45.89 0 1.78l-1.6 3.22q-.45.89-1.45.89h-1q-1 0-.55-.89l1.6-3.22q.45-.89 0-1.78l-1.6-3.22q-.45-.89.55-.89");
}
</style><path class="dk7-ofbsm"/>`,
		"fallback": "iconoven:kill-chain",
	});
}

export default Component;
