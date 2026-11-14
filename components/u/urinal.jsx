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
		"content": `<style>.qoerfobfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v19m0-13h12L16.25 15c-.75 2.75-3 4.5-6.25 4.5H6m4.5-17v6");
}
</style><path class="qoerfobfi"/>`,
		"fallback": "uix:urinal",
	});
}

export default Component;
