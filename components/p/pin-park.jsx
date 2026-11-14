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
		"content": `<style>.hy9la2w0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 4h10.75A2.625 2.625 0 0 1 20 6.625v.75A2.625 2.625 0 0 1 17.375 10H6.625A2.625 2.625 0 0 1 4 7.375v-.75A2.625 2.625 0 0 1 6.625 4M4 13h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 16H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 13m2.5-3v3M5 16v4m12.5-10v3m1.5 3v4");
}
</style><path class="hy9la2w0f"/>`,
		"fallback": "uix:pin-park",
	});
}

export default Component;
