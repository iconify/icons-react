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
		"content": `<style>.z0ywrxbnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.53 3.04l6.69 3.67q.53.29-.07.29h-.05q-.6 0-.6.6v7.8q0 .6-.6.6H6.1q-.6 0-.6-.6V7.6q0-.6-.6-.6h-.05q-.6 0-.07-.29l6.69-3.67q.53-.29 1.06 0M5.5 10h13m-13 3h13M7.75 16v5.25m8.5-5.25v5.25");
}
</style><path class="z0ywrxbnq"/>`,
		"fallback": "iconoven:weather-station",
	});
}

export default Component;
