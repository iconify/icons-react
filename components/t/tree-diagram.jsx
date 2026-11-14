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
		"content": `<style>.bzuulg4lr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5A1.75 1.75 0 0 1 15 4.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 5.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m-6 14h2.5A1.75 1.75 0 0 1 9 18.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 3 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m12 0h2.5A1.75 1.75 0 0 1 21 18.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75M12 7.5V12m-6 4.5V12h12v4.5");
}
</style><path class="bzuulg4lr"/>`,
		"fallback": "uix:tree-diagram",
	});
}

export default Component;
