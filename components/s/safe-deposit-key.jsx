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
		"content": `<style>.gsh9adc6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 0h9m-3 0v3m3-3v2.5");
}
</style><path class="gsh9adc6z"/>`,
		"fallback": "uix:safe-deposit-key",
	});
}

export default Component;
