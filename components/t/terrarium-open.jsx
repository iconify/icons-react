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
		"content": `<style>.r_mhlqbla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10c0 7 4 11.5 9 11.5S21 17 21 10m-9 8.75V7.5M12 9c0-3-2-5-5.5-5C6.5 7 9 9 12 9m0-1.5c0-3 2-5 5.5-5c0 3-2.5 5-5.5 5");
}
</style><path class="r_mhlqbla"/>`,
		"fallback": "uix:terrarium-open",
	});
}

export default Component;
