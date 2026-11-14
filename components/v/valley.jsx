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
		"content": `<style>.xq6agwsgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9q1.5-4 4-4C8.5 5 8 16.5 12 16.5S15.5 5 17.5 5q2.5 0 4 4m-19 11h19");
}
</style><path class="xq6agwsgi"/>`,
		"fallback": "uix-sharp:valley",
	});
}

export default Component;
