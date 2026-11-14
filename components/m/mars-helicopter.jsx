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
		"content": `<style>.kniycz3wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 3h19M12 3v6m-1.875 0h3.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 13.875 15h-3.75A2.625 2.625 0 0 1 7.5 12.375v-.75A2.625 2.625 0 0 1 10.125 9M9.5 15L5 21m9.5-6l4.5 6M2.5 21h19");
}
</style><path class="kniycz3wx"/>`,
		"fallback": "uix:mars-helicopter",
	});
}

export default Component;
