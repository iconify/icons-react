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
		"content": `<style>.q-a23fvay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.238 20.5H3.5l1-13h13l.353 4.586M8 7.5v-2a3 3 0 0 1 6 0v2M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="q-a23fvay"/>`,
		"fallback": "uix:pin-convenience",
	});
}

export default Component;
