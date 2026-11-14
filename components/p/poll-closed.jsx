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
		"content": `<style>.f5n5tpn3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V14m4 6.5V9m4 11.5v-17m3.5 12h7v6h-7Zm1.5 0V14a2 2 0 0 1 4 0v1.5");
}
</style><path class="f5n5tpn3n"/>`,
		"fallback": "uix-sharp:poll-closed",
	});
}

export default Component;
