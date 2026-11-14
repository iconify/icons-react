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
		"content": `<style>.dvk6wub2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13h13v5.5h-13ZM8 18.5V21m8-2.5V21m-8.5-8L9 9.5h6l1.5 3.5m-13-3l3-7.5m14 7.5l-3-7.5");
}
</style><path class="dvk6wub2a"/>`,
		"fallback": "uix-sharp:traffic-model",
	});
}

export default Component;
