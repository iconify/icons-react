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
		"content": `<style>.tb-idcg1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5h18.5l-3 5.5h-14Zm3 0V3m0 .5c3-1 5 1.5 8.5.5v6C11 11 9 8.5 6 9.5");
}
</style><path class="tb-idcg1p"/>`,
		"fallback": "uix:stern-flagstaff",
	});
}

export default Component;
