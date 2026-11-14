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
		"content": `<style>.f5calnbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5V8m0 0a5 5 0 0 1 5-5m1.677 0h5.646a1.036 1.036 0 0 1 .927 1.5l-.335.671A1.5 1.5 0 0 1 17.573 6h-4.146a1.5 1.5 0 0 1-1.342-.829L11.75 4.5a1.036 1.036 0 0 1 .927-1.5M3.5 21.5h5M13 9l-1 2.5M16 9v2.75M19 9l1 2.5");
}
</style><path class="f5calnbkf"/>`,
		"fallback": "uix:street-light-led",
	});
}

export default Component;
