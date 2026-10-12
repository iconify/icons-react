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
		"content": `<style>.cnliououd {
  cx: 8.5px;
  cy: 7.25px;
  r: 3px;
}

.efm_cxbze {
  d: path("M3 21.25V18a5.5 5.5 0 0 1 11 0v3.25ZM13.25 15l4.25-2.25m0 8.5v-15m.45-3.29l2.85 1.33q.45.21 0 .42l-2.85 1.33q-.45.21-.45-.29v-2.5q0-.5.45-.29");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="cnliououd"/><path class="efm_cxbze"/></g>`,
		"fallback": "iconoven:tour-guide",
	});
}

export default Component;
