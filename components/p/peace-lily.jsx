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
		"content": `<style>.ftnad4b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15c-5-2-4.5-9 0-12.5C16.5 6 17 13 12 15m0 0v6.5m0-9.5V7.5m0 14C7 21 4 17 4 13c4 .5 7 4 8 8.5m0 0c5-.5 8-4.5 8-8.5c-4 .5-7 4-8 8.5");
}
</style><path class="ftnad4b4a"/>`,
		"fallback": "uix:peace-lily",
	});
}

export default Component;
