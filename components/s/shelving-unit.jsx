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
		"content": `<style>.rdcipcwwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5v19m15-19v19M4.5 6h15m-15 6.5h15M4.5 19h15M9.75 8.75h2a1.75 1.75 0 0 1 1.75 1.75v.25a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 8 10.75v-.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="rdcipcwwx"/>`,
		"fallback": "uix:shelving-unit",
	});
}

export default Component;
