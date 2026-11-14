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
		"content": `<style>.pdg2ftbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5h18m-14 0C7 14 5.5 8 3 3.5m9 18C12 14 12.5 8 14 3m3 18.5C17 15 18.5 10 21 6");
}
</style><path class="pdg2ftbma"/>`,
		"fallback": "uix:tall-grass",
	});
}

export default Component;
