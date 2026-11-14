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
		"content": `<style>.tsnwj22na {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.089 20.274L13 21l-2.5-1.5L8 21l-2.25-1.5L3.5 21V2.5h14v9.1M7 7h7m-7 4h7m-7 4h3.5m9-1.5L15.75 18h4l-3 4");
}
</style><path class="tsnwj22na"/>`,
		"fallback": "uix:payment-bill",
	});
}

export default Component;
