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
		"content": `<style>.iclpdg03o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.075 8.5h5.85a1.75 1.75 0 0 1 1.74 1.567l.632 6A1.75 1.75 0 0 1 19.556 18h-7.112a1.75 1.75 0 0 1-1.741-1.933l.632-6a1.75 1.75 0 0 1 1.74-1.567m.425 0C13.5 4 16 4 16 8.5m0 0c0-4.5 2.5-4.5 2.5 0m-16 13h.01M5 20h.01m2.49-1.25h.01M4.5 16.5h.01");
}
</style><path class="iclpdg03o"/>`,
		"fallback": "uix:shopping-trip",
	});
}

export default Component;
