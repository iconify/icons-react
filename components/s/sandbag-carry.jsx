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
		"content": `<style>.rtp0-jbnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7c-4.5 2-6.5 5.5-6.5 9S5 21.5 9 21.5h3c1.234 0 2.326-.19 3.245-.557m2.441-8.681C16.72 10.158 14.867 8.274 12 7M9 7L7 2.5h7L12 7M7.5 7h6M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="rtp0-jbnq"/>`,
		"fallback": "uix:sandbag-carry",
	});
}

export default Component;
