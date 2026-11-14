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
		"content": `<style>.y3yokl1av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5Q9 13 3 10m9 11.5Q10.5 10 8 3m4 18.5Q13.5 10 16 3m-4 18.5Q15 13 21 10M7 21.5h10");
}
</style><path class="y3yokl1av"/>`,
		"fallback": "uix:ornamental-grass",
	});
}

export default Component;
