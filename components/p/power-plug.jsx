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
		"content": `<style>.nnvi9y4zg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10v4a5 5 0 0 1-10 0Zm2.5-5v5m5-5v5M12 18v3.5");
}
</style><path class="nnvi9y4zg"/>`,
		"fallback": "uix:power-plug",
	});
}

export default Component;
