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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl_buvd_r {
  d: path("M4.22266 7C5.37351 4.76691 7.1866 3.04679 8.9997 2");
}

.n6daalb-j {
  d: path("M9 22C6 20.268 3 16.6925 3 12");
}

.vkba6k5jk {
  d: path("M15 22C18 20.268 21 16.6925 21 12C21 7.30754 18 3.73205 15 2");
}
</style><g class="ipq1z-bjh"><path class="n6daalb-j"/><path class="jl_buvd_r"/><path class="vkba6k5jk"/></g>`,
		"fallback": "solar:parentheses-broken",
	});
}

export default Component;
