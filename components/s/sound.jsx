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
		"content": `<style>.x2j-ccc6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3.868-4.096a5 5 0 0 1 0 8.192M9.236 3.808a10 10 0 0 1 0 16.384M16.5 12h5m-2.25-2.25L21.5 12l-2.25 2.25");
}
</style><path class="x2j-ccc6v"/>`,
		"fallback": "uix:sound",
	});
}

export default Component;
