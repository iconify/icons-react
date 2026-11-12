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

.sxv1zyb9f {
  d: path("M15 9L22 2M22 7.85714V2H16.1429");
}
</style><g class="hntgybcog"><path class="o35tmfo7o"/><path class="sxv1zyb9f"/></g>`,
		"fallback": "solar:maximize-linear",
	});
}

export default Component;
