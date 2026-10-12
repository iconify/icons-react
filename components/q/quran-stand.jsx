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
		"content": `<style>.c0v0mtj8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 15l-9.25-4.5V7L12 11.5L21.25 7v3.5Zm-4 5.75L12 15l4 5.75");
}
</style><path class="c0v0mtj8m"/>`,
		"fallback": "iconoven:quran-stand",
	});
}

export default Component;
