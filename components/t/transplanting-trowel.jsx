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
		"content": `<style>.ghqqjmfyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 7.75Q17 4.5 21 3q-1.5 4-4.75 9.25ZM14 10l-2.75 2.75m.139-.139za1.5 1.5 0 0 1 0 2.121l-5.657 5.657a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l5.657-5.657a1.5 1.5 0 0 1 2.121 0");
}
</style><path class="ghqqjmfyv"/>`,
		"fallback": "uix:transplanting-trowel",
	});
}

export default Component;
