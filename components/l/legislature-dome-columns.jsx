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
		"content": `<style>.koldiacvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5c0-3 3-4.5 6.5-4.5s6.5 1.5 6.5 4.5Zm1 2.75v5.25m2.75-5.25v5.25M12 10.25v5.25m2.75-5.25v5.25m2.75-5.25v5.25M5 15.5h14m-15 3h16m-17 3h18");
}
</style><path class="koldiacvn"/>`,
		"fallback": "uix:legislature-dome-columns",
	});
}

export default Component;
