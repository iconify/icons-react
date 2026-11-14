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
		"content": `<style>.gnl8uyjdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M3 3.5v18m18-18v18M7 3.5v3m-2.25 4L7 6.5l2.25 4zm7.25-7V9m-2.25 4L12 9l2.25 4zM17 3.5v3m-2.25 4l2.25-4l2.25 4z");
}
</style><path class="gnl8uyjdj"/>`,
		"fallback": "uix:walk-in-closet",
	});
}

export default Component;
