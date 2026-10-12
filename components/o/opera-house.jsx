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
		"content": `<style>.jrh65o_5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5Q4.5 8 12 4.5q-1 7.5-2.25 15Zm9.75 0Q14 10 21.25 8q-1.5 5-1.75 11.5Zm-10 0h18.5");
}
</style><path class="jrh65o_5k"/>`,
		"fallback": "iconoven:opera-house",
	});
}

export default Component;
