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
		"content": `<style>.n0j_0gwey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 11.5h13.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 15.875v-1.75A2.625 2.625 0 0 1 5.125 11.5m.875 7V21m12-2.5V21m-6-9.5v-6M12 9C9.5 9 7.5 7.5 7.5 5C10 5 12 6.5 12 9m0-1.5C12 5 14 3 16.5 3c0 2.5-2 4.5-4.5 4.5");
}
</style><path class="n0j_0gwey"/>`,
		"fallback": "uix:planter-barrier",
	});
}

export default Component;
