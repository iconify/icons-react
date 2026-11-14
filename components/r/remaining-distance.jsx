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
		"content": `<style>.ee3z7kb5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 21.5l7-19m12 19l-7-19M12 20V9m-2.5 2.5L12 9l2.5 2.5");
}
</style><path class="ee3z7kb5a"/>`,
		"fallback": "uix:remaining-distance",
	});
}

export default Component;
