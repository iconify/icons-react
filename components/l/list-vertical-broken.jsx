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
		"content": `<style>.fvnj3qbjd {
  d: path("M4 17H11");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh_4bzbdf {
  d: path("M4 12L11 12");
}

.o2bnwltsv {
  d: path("M4 7L11 7");
}

.r9gp_ab3d {
  stroke-linejoin: round;
  d: path("M17 4L17 20M20 8L17 4L14 8M14 16L17 20L20 16");
}
</style><g class="ipq1z-bjh"><path class="fvnj3qbjd"/><path class="kh_4bzbdf"/><path class="o2bnwltsv"/><path class="r9gp_ab3d"/></g>`,
		"fallback": "solar:list-vertical-broken",
	});
}

export default Component;
