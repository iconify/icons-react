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
		"content": `<style>.wwpya1bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-2.5 13c0-4 2.5-6 6-6s6 2 6 6M17 12V9.5a3.5 3.5 0 1 1 3 0V12Zm0 3h3");
}
</style><path class="wwpya1bat"/>`,
		"fallback": "uix:news-tip",
	});
}

export default Component;
