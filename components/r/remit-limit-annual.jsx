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
		"content": `<style>.uauoztqfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.72 12.174l9.176-3.778a1.75 1.75 0 0 1 2.199 2.463l-4.245 7.694a1.469 1.469 0 0 1-2.6-.053l-.946-1.893a1.75 1.75 0 0 0-.937-.851L6.75 14.75a1.386 1.386 0 0 1-.03-2.576M2.5 2.75h19M10 16l10.5-9.5");
}
</style><path class="uauoztqfu"/>`,
		"fallback": "uix:remit-limit-annual",
	});
}

export default Component;
