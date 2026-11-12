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

.o35tmfo7o {
  d: path("M9 15L2 22M2 16.1429V22H7.85714");
}

.talkkf4ro {
  d: path("M22 7.85714V2H16.1429M22 2L18.5 5.5M15 9L15.875 8.125");
}
</style><g class="hntgybcog"><path class="talkkf4ro"/><path class="o35tmfo7o"/></g>`,
		"fallback": "solar:maximize-broken",
	});
}

export default Component;
