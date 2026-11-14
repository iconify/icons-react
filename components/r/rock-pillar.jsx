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
		"content": `<style>.ivpr46bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 21l1-6l-.75-5.5l1.25-5l3-1.5L15 4.5l.75 5.5l-.75 5.5l1 5.5M3.5 21h17M8.75 12.5l3.25.75");
}
</style><path class="ivpr46bcj"/>`,
		"fallback": "uix-sharp:rock-pillar",
	});
}

export default Component;
