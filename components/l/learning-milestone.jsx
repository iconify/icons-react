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
		"content": `<style>.h90teibon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h5V16h5.5v-4.5H21m-3.5 0v-8m1.541.83l.084.045a.994.994 0 0 1 0 1.75l-.084.045a1.045 1.045 0 0 1-1.541-.92a1.045 1.045 0 0 1 1.541-.92");
}
</style><path class="h90teibon"/>`,
		"fallback": "uix:learning-milestone",
	});
}

export default Component;
