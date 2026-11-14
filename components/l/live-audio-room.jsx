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
		"content": `<style>.vf6nqdfgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za2.5 2.5 0 0 1 2.5 2.5V10a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 10V5.5A2.5 2.5 0 0 1 12 3m-4.178 9.729a6.5 6.5 0 0 1 0-9.958m8.356 0a6.5 6.5 0 0 1 0 9.958M12 15.5V21m-3.5 0h7");
}
</style><path class="vf6nqdfgx"/>`,
		"fallback": "uix:live-audio-room",
	});
}

export default Component;
