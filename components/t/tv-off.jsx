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
		"content": `<style>.h1f02n4hn {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwwz0nbrh {
  d: path("M8.25 2.75L12 6.25l3.75-3.5m-7.5 18.5h7.5");
}
</style><g class="hntgybcog"><rect class="h1f02n4hn"/><path class="jwwz0nbrh"/></g>`,
		"fallback": "iconoven:tv-off",
	});
}

export default Component;
