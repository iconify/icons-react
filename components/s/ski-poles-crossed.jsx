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
		"content": `<style>.tn1mo4_gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 20.5l11-14m2 14l-11-14m11.385-3.523za1.5 1.5 0 0 1 .259 2.105l-.924 1.183a1.5 1.5 0 0 1-2.105.258a1.5 1.5 0 0 1-.259-2.105l.924-1.183a1.5 1.5 0 0 1 2.105-.258m-13.77 0za1.5 1.5 0 0 1 2.105.258l.924 1.183a1.5 1.5 0 0 1-.259 2.105a1.5 1.5 0 0 1-2.105-.258l-.924-1.183a1.5 1.5 0 0 1 .259-2.105M5.5 17.25l3 2.5m10-2.5l-3 2.5");
}
</style><path class="tn1mo4_gg"/>`,
		"fallback": "uix:ski-poles-crossed",
	});
}

export default Component;
