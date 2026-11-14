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
		"content": `<style>.ub8dz9b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19M12 12l-4 7h8ZM5.75 6h2.5A1.75 1.75 0 0 1 10 7.75v2.5A1.75 1.75 0 0 1 8.25 12h-2.5A1.75 1.75 0 0 1 4 10.25v-2.5A1.75 1.75 0 0 1 5.75 6M19 4.5V9m-2-2l2 2l2-2");
}
</style><path class="ub8dz9b9l"/>`,
		"fallback": "uix:simple-machine",
	});
}

export default Component;
