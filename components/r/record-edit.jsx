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
		"content": `<style>.wuvaxdbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.6 12.5H2.5V5h19v7.5h-.1M8.5 5v7.5m6-7.5v7.5m7 4l-4.25 4.25l-2.5.5l.5-2.5l4.25-4.25l2 2m-6.25 2.25l2 2");
}
</style><path class="wuvaxdbcu"/>`,
		"fallback": "uix-sharp:record-edit",
	});
}

export default Component;
