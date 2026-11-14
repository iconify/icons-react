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
		"content": `<style>.jv8cvym3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6v13.5M19.5 6v13.5m-15.882 2h1.764a.69.69 0 0 0 .618-1l-.085-.171a1.5 1.5 0 0 0-1.342-.829h-.146a1.5 1.5 0 0 0-1.342.829L3 20.5a.69.69 0 0 0 .618 1m15 0h1.764a.69.69 0 0 0 .618-1l-.085-.171a1.5 1.5 0 0 0-1.342-.829h-.146a1.5 1.5 0 0 0-1.342.829L18 20.5a.69.69 0 0 0 .618 1M3 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m15 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M4.5 7.5c2.5 8 12.5 8 15 0");
}
</style><path class="jv8cvym3u"/>`,
		"fallback": "uix:rope-barrier",
	});
}

export default Component;
