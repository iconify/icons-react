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
		"content": `<style>.ylh3vabqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 4.5l7.5 6.5l-7.5 6.5V14c-4.5 0-7.5 1.5-9.5 5.5C4 13 7.5 8.5 13 8Z");
}
</style><path class="ylh3vabqv"/>`,
		"fallback": "uix:share-forward",
	});
}

export default Component;
