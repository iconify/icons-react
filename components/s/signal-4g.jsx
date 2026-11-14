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
		"content": `<style>.gwg-fiteo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17V7l-5 6.5h6.5m11.58-2.794A5 5 0 1 1 16.25 7m5 5H17");
}
</style><path class="gwg-fiteo"/>`,
		"fallback": "uix:signal-4g",
	});
}

export default Component;
