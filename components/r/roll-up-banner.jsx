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
		"content": `<style>.w87ctnbqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 18V2.5h11V18M5.75 18h12.5A1.75 1.75 0 0 1 20 19.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75A1.75 1.75 0 0 1 5.75 18M9 6h6M9 9h4.5M9 13.5h6");
}
</style><path class="w87ctnbqt"/>`,
		"fallback": "uix:roll-up-banner",
	});
}

export default Component;
