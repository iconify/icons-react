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
		"content": `<style>.id608rbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.53 3.04l6.69 3.67l.53.29H18.5v9h-13V7H4.25l.53-.29l6.69-3.67l.53-.29zM5.5 10h13m-13 3h13M7.75 16v5.25m8.5-5.25v5.25");
}
</style><path class="id608rbtm"/>`,
		"fallback": "iconoven:weather-station-sharp",
	});
}

export default Component;
