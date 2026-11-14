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
		"content": `<style>.ylo63vbmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v6.5h8m-8 0l-3 12m11-12l.388 1.552M6 13.25h6.3m1.2 4.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0");
}
</style><path class="ylo63vbmv"/>`,
		"fallback": "uix:lifeguard",
	});
}

export default Component;
