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
		"content": `<style>.k19a4nfaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.75a7.75 7.75 0 1 0 15.5 0a7.75 7.75 0 1 0-15.5 0M12 6V2.5m0 1C10.5 2 8 2 6 3c2 1.25 4.5 1.5 6 .5");
}
</style><path class="k19a4nfaq"/>`,
		"fallback": "uix:mandarin-orange",
	});
}

export default Component;
